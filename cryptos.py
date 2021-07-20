from flask import Flask
from flask_cors import CORS
from pycoingecko import CoinGeckoAPI
import json

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

def getCryptos():
    try:
        cg = CoinGeckoAPI();
        result = cg.get_coins_markets(vs_currency='usd');
        retData = app.response_class(
            response=json.dumps(result),
            status=200,
            mimetype='application/json'
        )
        return retData;
    except Exception as e:
        return {'success': False, 'message': str(e)}, 500