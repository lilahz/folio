import os

from server import create_app

is_prod = os.environ.get('IS_HEROKU', None)
if is_prod:
    app = create_app('prod')
else:
    app = create_app('dev')

@app.route('/')
def index():
    return app.send_static_file('index.html')

# if __name__ == '__main__':
#     app.run()
#     app.send_static_file('index.html')
