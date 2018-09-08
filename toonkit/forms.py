from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, SelectField, RadioField, BooleanField
from wtforms.validators import DataRequired, ValidationError


class BattleForm(FlaskForm):
    sel_cog_lvl = RadioField('Cog Lvl', coerce=int,
                             choices=[(12, '12'), (11, '11'), (10, '10'),
                                      (9, '9'), (8, '8'), (7, '7'), (6, '6'),
                                      (5, '5'), (4, '4'), (3, '3'), (2, '2'), (1, '1')])

    sel_track = RadioField('Gag Track', choices=[('sound', 'Sound'), ('throw', 'Throw'),
                                                 ('squirt', 'Squirt'), ('drop', 'Drop')])

    sel_lured = BooleanField('Lured', default=False)

    sel_num_toons = RadioField('Num Toons', coerce=int,
                               choices=[(4, '4 Toons'), (3, '3 Toons'), (2, '2 Toons')])
    
    submit = SubmitField('Submit')
