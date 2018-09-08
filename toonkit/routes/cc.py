from flask import render_template, request, Blueprint


cc = Blueprint('cc', __name__, url_prefix="/corporate-clash")

# Corporate Clash routes
@cc.route("/support", methods=['GET'])
def support():
    return render_template('cc/cc-support.html', title='Support')

@cc.route("/status", methods=['GET'])
def status():
    return render_template('cc/cc-status.html', title='Status')

@cc.route("/tracker", methods=['GET'])
def inv_tracker():
    return render_template('cc/cc-tracker.html', title='Invasions')

# Not Used
# @cc.route("/home")
# @cc.route("/", methods=['GET'])
# def home():
#     return render_template('cc/cc-home.html', title='Corporate Clash')

# Not Used
# @cc.route("/leaderboard", methods=['GET'])
# def leaderboard():
#     return render_template('cc/cc-leaderboard.html', title='Leaderboard')

# Not Used
# @cc.route("/combos", methods=['GET'])
# def combos():
#     return render_template('cc/cc-combos.html', title='Combos')
