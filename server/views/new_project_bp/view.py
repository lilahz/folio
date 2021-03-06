import re
from flask import Blueprint, render_template, jsonify, request

from server.models.Project import Project

new_project_bp = Blueprint('new_project', __name__)


def create_new_project():
    data = request.json
    print((data.get('field')))
    new_project = Project(
            data.get('company_id'), 
            data.get('description'), 
            data.get('field'), 
            # re.sub('[\[,\]]', '', data.get('field')).split(' '),
            data.get('status'))

    Project.add_new_project(new_project)
    return jsonify({'message': 'project created successfully'}), 200

new_project_bp.add_url_rule('', 'create_new_project', create_new_project, methods=['POST'])