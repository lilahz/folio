import os

basedir = os.path.abspath(os.path.dirname(__file__))


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
    # SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', HERUKO_POSTGRES)


config_by_mode = dict(dev=DevelopmentConfig, prod=ProductionConfig)
key = Config.SECRET_KEY
