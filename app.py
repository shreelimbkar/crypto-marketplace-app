from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api', methods=['GET'])
@cross_origin()
def api():
    return {
        'userid': 1,
        'title': 'Flask react Application',
        'completed': False
    }


@app.route('/api/users', methods=['GET'])
@cross_origin()
def users():
    print("SUPABASE_URL: ", os.getenv('SUPABASE_URL'))
    print("SUPABASE_API_KEY: ", os.getenv('SUPABASE_API_KEY'))
    SUPABASE_URL = os.getenv('SUPABASE_URL')
    SUPABASE_HEADERS = {
        'apikey': os.getenv('SUPABASE_API_KEY'),
        'Authorization': 'Bearer' + os.getenv('SUPABASE_API_KEY')
    }
    response = requests.get(f'{SUPABASE_URL}/users', headers=SUPABASE_HEADERS)

    return response.text


if __name__ == "__main__":
    app.run()
