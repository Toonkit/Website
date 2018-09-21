import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' # Testing DB (SQLite)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI') # Production DB (PostgreSQL)
db = SQLAlchemy(app)

from toonkit.routes.main import main
from toonkit.routes.cc import cc
from toonkit.routes.ttr import ttr
app.register_blueprint(main)
app.register_blueprint(cc)
app.register_blueprint(ttr)
