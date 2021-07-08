from flask import Flask
from flask_cors import CORS, cross_origin
import json

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

def subscribe(emailid):
    SUPABASE_URL = os.getenv('SUPABASE_URL')
    SUPABASE_HEADERS = {
        'apikey': os.getenv('SUPABASE_API_KEY'),
        'Authorization': 'Bearer' + os.getenv('SUPABASE_API_KEY'),
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    }
    try:
        data = {'emailid': emailid}
        result = requests.post(f'{SUPABASE_URL}/newsletter', headers=SUPABASE_HEADERS, json=data)
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
