from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['GET'])
def api():
    return {
        'userid': 1,
        'title': 'Flask react Application',
        'completed': False
    }


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='8080')  # Run the flask app at port 8080
