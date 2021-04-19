from flask import Blueprint, render_template

from .auth_junior import junior_register, junior_login, junior_logout, junior_delete
from .auth_company import company_register, company_login, company_logout, company_delete

auth_bp = Blueprint('/api/auth', __name__)

auth_bp.add_url_rule('/junior_register', 'junior_register', junior_register, methods=['POST'])
auth_bp.add_url_rule('/junior_login', 'junior_login', junior_login, methods=['POST'])
auth_bp.add_url_rule('/junior_logout', 'junior_logout', junior_logout, methods=['POST'])
auth_bp.add_url_rule('/junior_delete', 'junior_delete', junior_delete, methods=['POST'])

auth_bp.add_url_rule('/company_register', 'company_register', company_register, methods=['POST'])
auth_bp.add_url_rule('/company_login', 'company_login', company_login, methods=['POST'])
auth_bp.add_url_rule('/company_logout', 'company_logout', company_logout, methods=['POST'])