from toonkit import app
from flask import render_template

@app.route("/", methods=['GET'])
@app.route("/home", methods=['GET'])
def home():
    return render_template('index.html', title='Home')

@app.route("/staff", methods=['GET'])
def staff():
    return render_template('staff.html', title='Staff')

@app.route("/clash-faq", methods=['GET'])
def clash_faq():
    return render_template('clash-faq.html', title='Clash FAQ')

@app.route("/speedrunning-faq", methods=['GET'])
def speedrunning_faq():
    return render_template('speedrunning-faq.html', title='Speedrunning FAQ')

@app.route("/cc-status", methods=['GET'])
def cc_status():
    return render_template('cc-status.html', title='CC Status')

@app.route("/cc-tracker", methods=['GET'])
def cc_inv_tracker():
    return render_template('cc-tracker.html', title='CC Invasions')
