from flask import Flask
from flask import request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

import articles
import users
import news
import subscription

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
def getAllusers():
    return users.getUsers()

@app.route('/api/news', methods=['GET'])
@cross_origin()
def getAllnews():
    return news.getNews()

@app.route('/api/subscribe', methods=['POST'])
@cross_origin()
def newSubscribe():
    if request.method == 'POST':
        req_json = request.json
        emailid = req_json['emailid']
    return subscription.subscribe(emailid)

@app.route('/api/articles', methods=['GET'])
@cross_origin()
def getAllArticles():
    return articles.getArticles()

@app.route('/api/article', methods=['POST'])
@cross_origin()
def newArticle():
    if request.method == 'POST':
        req_json = request.json
        title = req_json['title']
        desc = req_json['description']
        # print("EMAIL ID = ", emailid)
    return articles.addNewArticle(title, desc)

if __name__ == "__main__":
    app.run()
