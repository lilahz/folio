from flask.globals import session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import load_only

from server.models import db


class Company(UserMixin, db.Model):
    __tablename__ = 'Companies'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    phone_number = db.Column(db.Text)
    password_hash = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120)) 
    profile_picture = db.Column(db.String())
    company_url = db.Column(db.String())
    facebook_url = db.Column(db.String())
    instagram_url = db.Column(db.String())
    about_me = db.Column(db.Text)

    def __init__(self,company_name, email, phone_number, location, profile_picture, company_url, facebook_url, instagram_url, about_me):
        self.company_name = company_name
        self.email = email
        self.phone_number = phone_number
        self.location = location
        self.profile_picture = profile_picture
        self.company_url = company_url
        self.facebook_url = facebook_url
        self.instagram_url = instagram_url
        self.about_me = about_me

    def __repr__(self):
        return f"<Company Name {self.company_name}>"

    def add_new_company(new_company):
        db.session.add(new_company)
        db.session.commit()

    def delete_company(company_email):
        d = Company.delete().where(Company.email == company_email)
        d.execute()

    def get_company_name_by_id(id):
        result = db.session.query(Company.company_name).filter(Company.id==id).first()
        return result[0]
    
    def get_company_email_by_id(id):
        result = db.session.query(Company.email).filter(Company.id==id).first()
        return result[0]

    def get_company_description_by_id(id):
        result = db.session.query(Company.about_me).filter(Company.id==id).first()
        return result[0]

    def get_company_url_by_id(id):
        result = db.session.query(Company.company_url).filter(Company.id==id).first()
        return result[0]

    def get_facebook_url_by_id(id):
        result = db.session.query(Company.facebook_url).filter(Company.id==id).first()
        return result[0]

    def get_instagram_url_by_id(id):
        result = db.session.query(Company.instagram_url).filter(Company.id==id).first()
        return result[0]
    
    def get_profile_picture_by_id(id):
        result = db.session.query(Company.profile_picture).filter(Company.id==id).first()
        return result[0]

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
        
    def is_authenticated(self):
        return True
