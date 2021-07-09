from flask import Flask
from flask_cors import CORS, cross_origin
import json
# import jwt

import os
import requests

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_HEADERS = {
    'apikey': os.getenv('SUPABASE_API_KEY'),
    'Authorization': 'Bearer' + os.getenv('SUPABASE_API_KEY')
}

def getUsers():
    # SUPABASE_URL="https://nphwmgpfpqxwnutrnljz.supabase.co/rest/v1"
    # SUPABASE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNDk2MzU1MCwiZXhwIjoxOTQwNTM5NTUwfQ.zsoD06SQspY-Uj6sjAX_qPfSTYC5sauxnH6a20BcuTE"
    # print("SUPABASE_URL: ", os.getenv('SUPABASE_URL'))
    # print("SUPABASE_API_KEY: ", os.getenv('SUPABASE_API_KEY'))

    try:
        result = requests.get(f'{SUPABASE_URL}/users', headers=SUPABASE_HEADERS)
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

def login(email, pwd):
    SUPABASE_HEADERS['Content-Type'] = 'application/json'
    SUPABASE_HEADERS['Prefer'] = 'return=representation'
    if len(email.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Username. Please try again!'}, 500

    if len(pwd.strip()) <= 0:
        return {'status': 500, 'responseMessage': 'Invalid Password. Please try again!'}, 500

    # encoded = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
    # ) + datetime.timedelta(minutes=20)}, app.config['SECRET_KEY'])
    try:
        print("EMAIL, PWD", email, pwd)
        result = requests.get(f'{SUPABASE_URL}/users?select=*', headers=SUPABASE_HEADERS)
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
        return {'status': 500, 'responseMessage': str(e)}, 500

def register(userData):
    SUPABASE_HEADERS['Content-Type'] = 'application/json'
    SUPABASE_HEADERS['Prefer'] = 'return=representation'
    firstName, lastName, email, pwd = userData
    try:
        data = {'firstName': firstName, 'lastName': lastName, 'email': email, 'password': pwd}
        result = requests.post(f'{SUPABASE_URL}/users', headers=SUPABASE_HEADERS, json=data)
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
