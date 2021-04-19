from flask import Blueprint, json, render_template, jsonify, request
from server.models.Junior import Junior
from server.models.Project import Project
from server.models.Company import Company


home_bp = Blueprint('/api/home', __name__)


def home_page():
    all_juniors = Junior.get_juniors(9)
    all_projects = Project.get_projects(9)
    json_string_juniors = [junior.dump() for junior in all_juniors]
    json_string_projects = [project.dump(Company.get_company_name_by_id(project.company_id), 
                                         Company.get_company_description_by_id(project.company_id)) 
                                         for project in all_projects]
    joint_json_string = {"juniors_json": json_string_juniors,
                         "projects_json": json_string_projects}
    return joint_json_string

def get_all_juniors():
    all_juniors = Junior.get_juniors()
    json_string = json.dumps([junior.dump() for junior in all_juniors])
    return json_string
    
def get_all_projects():
    all_projects = Project.get_projects()
    json_string = json.dumps(
        [project.dump(
            company_name=Company.get_company_name_by_id(project.company_id), 
            company_email=Company.get_company_email_by_id(project.company_id),
            company_description=Company.get_company_description_by_id(project.company_id),
            company_profile_picture=Company.get_profile_picture_by_id(project.company_id),
            company_url=Company.get_company_url_by_id(project.company_id),
            facebook_url=Company.get_facebook_url_by_id(project.company_id),
            instagram_url=Company.get_instagram_url_by_id(project.company_id)) 
            for project in all_projects])
    return json_string


home_bp.add_url_rule('/', 'home_page', home_page, methods=['GET'])
home_bp.add_url_rule('/juniors', 'get_all_juniors', get_all_juniors, methods=['GET'])
home_bp.add_url_rule('/projects', 'get_all_projects', get_all_projects, methods=['GET'])
