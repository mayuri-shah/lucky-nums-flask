from wtforms import SelectField,StringField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired


class LuckyForm(FlaskForm):
    """Form for Profile"""
    name = StringField("Name : ",validators=[InputRequired()])
    birthyear = StringField("BirthYear : ",validators=[InputRequired()])
    email = StringField("Email : ",validators=[InputRequired()])
    color = SelectField("Color :",choices=[(1,'red'),(2,'blue'),(3,'green'),(4,'yellow')])