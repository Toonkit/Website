from toonkit import app, db
from flask import render_template, request
from toonkit.forms import BattleForm
from toonkit.models import Gag, Combo, Cog
from pprint import pprint


@app.route("/", methods=['GET'])
@app.route("/home", methods=['GET'])
def home():
    return render_template('index.html', title='Home')

@app.route("/staff", methods=['GET'])
def staff():
    return render_template('staff.html', title='Staff')

@app.route("/speedrunning-faq", methods=['GET'])
def speedrunning_faq():
    return render_template('speedrunning-faq.html', title='Speedrunning FAQ')

# Corporate Clash routes
@app.route("/corporate-clash", methods=['GET'])
def cc_home():
    return render_template('index.html', title='Corporate Clash')

@app.route("/corporate-clash/faq", methods=['GET'])
def cc_faq():
    return render_template('cc/cc-faq.html', title='Clash FAQ')

@app.route("/corporate-clash/status", methods=['GET'])
def cc_status():
    return render_template('cc/cc-status.html', title='CC Status')

@app.route("/corporate-clash/tracker", methods=['GET'])
def cc_inv_tracker():
    return render_template('cc/cc-tracker.html', title='CC Invasions')


# TT Rewritten routes
@app.route("/rewritten", methods=['GET'])
def ttr_home():
    return render_template('index.html', title='Rewritten')

@app.route("/rewritten/combos", methods=['GET', 'POST'])
def ttr_combos():
    form = BattleForm()
    print(request.form)
    if form.validate_on_submit():
        combos = list()
        if form.sel_track.data == 'drop':
            for stun_track in ('sound', 'throw', 'squirt'):
                is_lured = False if stun_track == 'sound' else form.sel_lured.data
                print("\n\t\tis_lured={}\n".format(is_lured))
                query_c = Combo.query.filter_by(num_toons=form.sel_num_toons.data,
                                                cog_lvl=form.sel_cog_lvl.data,
                                                track=form.sel_track.data,
                                                stun_track=stun_track, # in loop
                                                lured=is_lured).first()
                if query_c:
                    combos.append(query_c)
                else:
                    print("\n\n_____________COMBO IS MISSING_____________\n\n")
                    return render_template('combos_select_layout.html', title='Layout', form=form)
            cog = Cog.query.filter_by(id=form.sel_cog_lvl.data).first()
            return render_template('ttr/ttr-combos.html', title='Combos', form=form, combos=combos,
                                       cog=cog)#, wider=wider, taller=taller)

        # Database does not contain entries for lured combos where
        # lured makes no diference, i.e when there is no knockback dmg.
        is_lured = True if form.sel_lured.data and form.sel_track.data in {'throw', 'squirt'} else False
        print("\n\t\tis_lured={}\n".format(is_lured))
        query_c = Combo.query.filter_by(num_toons=form.sel_num_toons.data, cog_lvl=form.sel_cog_lvl.data,
                                        track=form.sel_track.data,
                                        lured=is_lured).first()
        if query_c:
            combos = list()
            combos.append(query_c)
            print("\n", combos, "\n")
            cog = Cog.query.filter_by(id=form.sel_cog_lvl.data).first()
            return render_template('ttr/ttr-combos.html', title='Combos', form=form, combos=combos,
                                   cog=cog)#, wider=wider, taller=taller)
        else:
            print("\n\n_____________COMBO IS MISSING_____________\n\n")
        print(form.errors)
        return render_template('ttr/ttr-combos-layout.html', title='Combos', form=form)
    print(form.errors)
    return render_template('ttr/ttr-combos-layout.html', title='Combos', form=form)


# For debugging, printing Jinja variables.
@app.context_processor
def utility_functions():
    def print_in_console(message):
        print(str(message))
    return dict(mdebug=print_in_console)
