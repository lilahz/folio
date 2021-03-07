from flask import Flask, config, Blueprint, render_template
from flask_cors import CORS

from .config import config_by_mode
from server.models import db, init_db , login_manager

from server.views.auth_bp.view import auth_bp
from server.views.home_bp.view import home_bp
from server.views.portfolio_bp.view import portfolio_bp
from server.views.new_project_bp.view import new_project_bp
from server.views.join_project_bp.view import join_project_bp


def create_app(config_mode):

    app = Flask(__name__, static_url_path='', static_folder='build')
    app.config.from_object(config_by_mode[config_mode])

    cors = CORS(app)

    db.init_app(app)
    init_db(app)

    login_manager.init_app(app)

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(home_bp, url_prefix='/api/home')
    app.register_blueprint(portfolio_bp, url_prefix='/api/portfolio')
    app.register_blueprint(new_project_bp, url_prefix='/api/new_project')
    app.register_blueprint(join_project_bp, url_prefix='/api/join_project')

    if config_mode == 'prod':
        @app.route('/')
        def index():
            return app.send_static_file('index.html')

        @app.errorhandler(404)
        def not_found(e):
            return app.send_static_file('index.html')

    return app
