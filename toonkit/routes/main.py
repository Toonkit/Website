from flask import render_template, request, Blueprint


main = Blueprint('main', __name__)

# Main routes
@main.route("/", methods=['GET'])
@main.route("/home", methods=['GET'])
def home():
    print(dir(request))
    return render_template('index.html', title='Home')

@main.route("/staff", methods=['GET'])
def staff():
    return render_template('staff.html', title='Staff')

@main.route("/speedrun-faq", methods=['GET'])
def speedrun_faq():
    return render_template('speedrunning-faq.html', title='Speedrun FAQ')

# For debugging, printing Jinja variables.
@main.context_processor
def utility_functions():
    def print_in_console(message):
        print(str(message))
    return dict(mdebug=print_in_console)