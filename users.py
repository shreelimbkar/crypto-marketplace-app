from flask import Flask
from flask_cors import CORS, cross_origin
import json
from flask_jwt_extended import create_access_token
# send email to user
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
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

    try:
        result = requests.get(f'{SUPABASE_URL}/users?email=eq.{email}&password=eq.{pwd}&select=firstName,email,role', headers=SUPABASE_HEADERS)
        if(len(result.text) > 2):
            access_token = create_access_token(identity=result.text)
            response = {'success': True, 'data': access_token}
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
        data = {'firstName': firstName, 'lastName': lastName, 'email': email, 'password': pwd, 'role': 'user'}
        result = requests.post(f'{SUPABASE_URL}/users', headers=SUPABASE_HEADERS, json=data)
        if(result):
            # Send OTP email to registered User
            subject = "Welcome to Cryptocurrency MarketPlace Blog"
            body = f"""
                <h3>Welcome to Cryptocurrency MarketPlace Blog</h3>
                <p>Hi {firstName},</p>
                <p>Thanks for registering to Cryptocurrency Blog. You can log in again with the email address {email}</p>
                <p>Cheers,<br/>Cryptocurrency Admin Team,<br/>Dublin 1.</p>
            """
            send_email('shricryptoblog@gmail.com',
                    'Shree@2@21', email, subject, body)
            response = {'success': True, 'data': "Success"}
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
