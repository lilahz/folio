from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import inspect

from server.models import db

class Junior(UserMixin, db.Model):
    __tablename__ = 'Juniors'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)
    full_name = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.Text)
    field = db.Column(db.ARRAY(db.String(50))) 
    profile_picture = db.Column(db.String())
    personal_url = db.Column(db.String())
    facebook_url = db.Column(db.String())
    instagram_url = db.Column(db.String())
    linkedIn_url = db.Column(db.String())
    gitHub_url = db.Column(db.String())
    about_me = db.Column(db.Text)

    def __init__(self, email, full_name, phone_number, field, profile_picture, personal_url, facebook_url, instagram_url, linkedIn_url, gitHub_url ,about_me):
        self.email = email
        self.full_name = full_name
        self.phone_number = phone_number
        self.field = field
        self.profile_picture = profile_picture
        self.personal_url = personal_url
        self.facebook_url = facebook_url
        self.instagram_url = instagram_url
        self.linkedIn_url = linkedIn_url
        self.gitHub_url = gitHub_url
        self.about_me = about_me

    def __repr__(self):
        return f"<User {self.email}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_juniors(lim=None):
        return Junior.query.limit(lim).all() 

    def add_new_junior(new_junior):
        db.session.add(new_junior)
        db.session.commit()

    def delete_junior(junior_email):
        d = Junior.delete().where(Junior.email == junior_email)
        d.execute()

    def dump(self):
        return {'id': self.id,
                'email': self.email,
                'full_name': self.full_name,
                'phone_number': self.phone_number,
                'field': self.field,
                'profile_picture': self.profile_picture,
                'personal_url': self.personal_url,
                'facebook_url': self.facebook_url,
                'instagram_url': self.instagram_url,
                'linkedIn_url': self.linkedIn_url,
                'gitHub_url': self.gitHub_url,
                'about_me': self.about_me}

    def is_authenticated(self):
        return True
