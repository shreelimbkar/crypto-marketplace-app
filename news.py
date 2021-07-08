from flask import Flask
from flask_cors import CORS, cross_origin
import json

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

def getNews():
    NEWS_API_KEY = "cbce94fb8af54702ab0a55a412420aa8"
    NEWS_URL = "https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=popularity"
    
    # SUPABASE_URL = os.getenv('SUPABASE_URL')
    # SUPABASE_HEADERS = {
    #     'apikey': os.getenv('SUPABASE_API_KEY'),
    #     'Authorization': 'Bearer' + os.getenv('SUPABASE_API_KEY')
    # }
    try:
        result = requests.get(f'{NEWS_URL}&apiKey={NEWS_API_KEY}')
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
