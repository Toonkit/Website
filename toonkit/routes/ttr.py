from flask import render_template, request, Blueprint
from toonkit import db
from toonkit.forms import BattleForm
from toonkit.models import Gag, Combo, Cog


ttr = Blueprint('ttr', __name__, url_prefix="/rewritten")

# TT Rewritten routes
@ttr.route("/home")
@ttr.route("/", methods=['GET'])
def home():
    return render_template('ttr/ttr-home.html', title='Toontown Rewritten')

@ttr.route("/support", methods=['GET'])
def support():
    return render_template('ttr/ttr-faq.html', title='Support')

@ttr.route("/leaderboard", methods=['GET'])
def leaderboard():
    return render_template('ttr/ttr-leaderboard.html', title='Leaderboard')

@ttr.route("/status", methods=['GET'])
def status():
    return render_template('ttr/ttr-status.html', title='Status')

@ttr.route("/tracker", methods=['GET'])
def inv_tracker():
    return render_template('ttr/ttr-tracker.html', title='Invasions')

@ttr.route("/combos", methods=['GET', 'POST'])
def combos():
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
