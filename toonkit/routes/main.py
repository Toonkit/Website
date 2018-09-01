from flask import render_template, request, Blueprint
from .. import app


main = Blueprint('main', __name__)

# Main routes
@main.route("/", methods=['GET'])
@main.route("/home", methods=['GET'])
def home():
    return render_template('index.html', title='Home')

@main.route("/staff", methods=['GET'])
def staff():
    return render_template('staff.html', title='Staff')

@main.route("/speedrun-faq", methods=['GET'])
def speedrun_faq():
    return render_template('speedrunning-faq.html', title='Speedrun FAQ')

# Custom 404
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404