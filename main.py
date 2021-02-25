import os

from server import create_app

is_prod = os.environ.get('IS_HEROKU', None)
port = os.environ.get('PORT', 5000)

if is_prod:
    app = create_app('prod')
else:
    app = create_app('dev')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
