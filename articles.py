from flask import Flask
from flask_cors import CORS, cross_origin
import json

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_HEADERS = {
        'apikey': os.getenv('SUPABASE_API_KEY'),
        'Authorization': 'Bearer' + os.getenv('SUPABASE_API_KEY')
    }

def getArticles():
    try:
        result = requests.get(f'{SUPABASE_URL}/articles', headers=SUPABASE_HEADERS)
        if(result):
            response = {'success': True, 'data': result.text}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData;
        else:
            return {'success': False, 'status': 500, 'message': 'Unauthorized User. Please try again!'}, 500
    except Exception as e:
        return {'success': False, 'message': str(e)}, 500

def addNewArticle(title, desc):
    SUPABASE_HEADERS['Content-Type'] = 'application/json'
    SUPABASE_HEADERS['Prefer'] = 'return=representation'
    try:
        data = {'title': title, 'description': desc}
        result = requests.post(f'{SUPABASE_URL}/articles', headers=SUPABASE_HEADERS, json=data)
        print("RESULT = ", result)
        if(result):
            response = {'success': True, 'data': result.text}
            retData = app.response_class(
                response=json.dumps(response),
                status=200,
                mimetype='application/json'
            )
            return retData;
        else:
            return {'success': False, 'status': 500, 'message': 'Unauthorized User. Please try again!'}, 500
    except Exception as e:
        return {'success': False, 'message': str(e)}, 500