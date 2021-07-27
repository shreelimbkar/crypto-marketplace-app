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
            # Send welcome email to registered User
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

def send_email(gmailUser, gmailPassword, recipient, subject, body):
    msg = MIMEMultipart()
    msg['From'] = f'"Cryptocurrency MarketPlace Admin " <shricryptoblog@gmail.com>'
    msg['To'] = recipient
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        mailServer = smtplib.SMTP('smtp.gmail.com', 587)
        mailServer.ehlo()
        mailServer.starttls()
        mailServer.ehlo()
        mailServer.login(gmailUser, gmailPassword)
        mailServer.sendmail(gmailUser, recipient, msg.as_string())
        mailServer.close()
    except LookupError:
        print('Something went wrong...', LookupError)
