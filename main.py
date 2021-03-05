import os

from server import create_app

is_prod = os.environ.get('IS_HEROKU', None)
host = os.environ.get('HOST', '127.0.0.1')
port = os.environ.get('PORT', 5000)

if is_prod:
    app = create_app('prod')
else:
    app = create_app('dev')

if __name__ == '__main__':
    app.run(host=host, port=port)
