from server.models import db
from server.models.Company import Company


class Project(db.Model):
    __tablename__ = 'Projects'

    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('Companies.id') ,nullable=False)
    description = db.Column(db.Text)
    field = db.Column(db.ARRAY(db.String(50))) 
    status = db.Column(db.String(120))

    def __init__(self,company_id, description, field, status):
        self.company_id = company_id
        self.description = description
        self.field = field
        self.status = status

    def __repr__(self):
        return f"<id {self.id}>"

    def get_projects(lim=None):
        return Project.query.limit(lim).all() 

    def add_new_project(new_project):
        db.session.add(new_project)
        db.session.commit()

    def dump(self, company_name, company_email, company_description, company_profile_picture=None, company_url=None, facebook_url=None, instagram_url=None):
        return {'id': self.id,
                'company_name': company_name,
                'company_email': company_email,
                'company_description': company_description,
                'company_profile_picture' : company_profile_picture,
                'description': self.description,
                'field': self.field,
                'status': self.status,
                'company_url': company_url,
                'facebook_url': facebook_url,
                'instagram_url': instagram_url
                }