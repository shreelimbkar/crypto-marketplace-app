from flask import Flask
from flask_cors import CORS, cross_origin
import json

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

COINMARKET_URL = os.getenv('COINMARKET_URL')
COINMARKET_HEADERS = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': os.getenv('CMC_PRO_API_KEY'),
    }

def getCryptos():
    try:
        result = requests.get(f'{COINMARKET_URL}/cryptocurrency/listings/latest', headers=COINMARKET_HEADERS)
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