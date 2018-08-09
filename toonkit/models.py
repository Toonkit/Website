from toonkit import db


class Combo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    num_toons = db.Column(db.Integer, nullable=False)
    cog_lvl = db.Column(db.Integer, nullable=False)
    # Refer to cog class for HP lookup, don't create duplicate HP values for each cog
    # cog_hp = db.Column(db.Integer, nullable=False)
    damage = db.Column(db.Integer, nullable=False)
    lured = db.Column(db.Boolean, nullable=False, default=False)
    track = db.Column(db.String(20), nullable=False)
    stun_track = db.Column(db.String(20), nullable=False, default='')
    gags = db.relationship('Gag', backref='c', lazy=True)
    def __repr__(self):
        # return f"{self.gags}"
        return "Combo({} Toons, lvl {} Cog,'{}', {} damage, stun='{}', lured='{}')".format(self.num_toons, self.cog_lvl, self.track, self.damage, self.stun_track, self.lured)


class Gag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    lvl = db.Column(db.Integer, nullable=False)
    track = db.Column(db.String(20), nullable=False)
    org = db.Column(db.Boolean, nullable=False, default=False)
    combo_id = db.Column(db.Integer, db.ForeignKey('combo.id'), nullable=False)
    
    # gag_combo = db.relationship('Combo', secondary=combos, backref=db.backref('gags', lazy='dynamic'))
    
    def __repr__(self):
        return "Gag('{}', lvl {}, '{}', org={})".format(self.name, self.lvl, self.track, self.org)

class Cog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hp = db.Column(db.Integer, nullable=False)



# class Cog(db.Model):
#     cog_hp = ('lookup values LMAO')