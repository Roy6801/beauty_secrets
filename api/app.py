from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
from reviews import fetch
from string import ascii_letters, digits
import random
import os

load_dotenv(find_dotenv())

app = Flask(__name__)

CORS(app)


@app.route("/<int:filter>/<api_key>")
def get_reviews(filter, api_key):
    key = os.getenv("API_KEY")
    if key == api_key:
        return fetch(filter)
    else:
        return "<h1>Bad Request</h1>"


@app.route("/generate_key")
def gen_key():
    return {
        "API KEY":
        "".join(random.choices(ascii_letters + digits, k=50)),
        "Info":
        "Use this newly generated key to manually set environment variable for api key in the producion (Needs Authentication ;) )."
    }


if __name__ == "__main__":
    app.run(threaded=True, port=os.getenv("PORT"))
