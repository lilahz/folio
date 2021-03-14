import os

basedir = os.path.abspath(os.path.dirname(__file__))
HEROKU_POSTGRES = 'postgres://tjixmnlsigtcwm:ccbaf7688761f2193b6c9f46f14d0ac92fa9a439edd32925e21eb36c379e12fa@ec2-34-203-155-237.compute-1.amazonaws.com:5432/df415d7mbtsmil'


class Config:
    """
    Basic configurations relevant for all environments (dev and prod).
    """
    SECRET_KEY = os.getenv('SECRET_KEY', 'bigsecret') # this really should be secret
    SECURITY_PASSWORD_HASH = os.getenv('SECURITY_PASSWORD_HASH', 'bcrypt')
    DEBUG = False


class DevelopmentConfig(Config):
    """
    Configurations for the development environment - local environment
    """
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgres://postgres:postgres@localhost:5432/folio_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    """
    Configurations for the production environment - external environment
    """
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', HEROKU_POSTGRES)


config_by_mode = dict(dev=DevelopmentConfig, prod=ProductionConfig)
key = Config.SECRET_KEY
