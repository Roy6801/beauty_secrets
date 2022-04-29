from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
from reviews import fetch
import os

load_dotenv(find_dotenv())

app = Flask(__name__)

CORS(app)

@app.route("/<int:filter>")
def get_reviews(filter):
    return fetch(filter)

if __name__ == "__main__":
    app.run(threaded=True, port=os.environ.get("PORT"))
