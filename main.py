import os

from server import create_app

is_prod = os.environ.get('IS_HEROKU', None)
if is_prod:
    app = create_app('prod')
else:
    app = create_app('dev')

if __name__ == '__main__':
    app.run()
