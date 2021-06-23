from flask import Flask, render_template,request,jsonify,redirect
from requests.auth import HTTPBasicAuth
import requests
import random

app = Flask(__name__)

app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num',methods=["POST"])
def show_luckyNum():
    #name = request.json["name"]
    #lucky_num = random.randint(1,50)
    year = request.json["year"]
    #print(year)
    #year = 1988
    urlyear = f'http://numbersapi.com/{year}/year'
    #url = f'http://numbersapi.com/{lucky_num}'
    resyear = requests.get(urlyear)
    #print(jsonify(reqyear.text))
    #data = reqyear.json()
    #req = requests.get(url)
    
    return jsonify(resyear.text)
    #return data
    #return render_template('luckynum.html',year = year,lucky_num=lucky_num,reqyear = jsonify(reqyear))
    


   