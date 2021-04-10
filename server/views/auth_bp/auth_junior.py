from flask import jsonify, request
from flask_login import login_required, logout_user, login_user

from server.models.Junior import Junior
from server.models import login_manager


def junior_register():
    data = request.json
    email = data.get('email')
    junior = Junior.query.filter_by(email=email).first() # check if this email is already registered
    if junior is None:
        password = data.get('password')
        remember_me = data.get('remember_me')
        new_junior = Junior(
            email,
            data.get('full_name'),
            data.get('phone_number'),
            data.get('field'),
            data.get('personal_url'),
            data.get('facebook_url'),
            data.get('instagram_url'),
            data.get('linkedIn_url'),
            data.get('gitHub_url'),
            data.get('about_me')
        )
        new_junior.set_password(password)
        Junior.add_new_junior(new_junior)
        if remember_me:
            login_user(new_junior, remember=True)  # Log in with the newly created user with remember me on
        else: 
            login_user(new_junior)  # Log in with the newly created user with remember me off
        
        return jsonify({'message': 'success'}), 200
    else:
        return jsonify({'error': 'already_exists'}), 403


def junior_login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    remember_me = data.get('remember_me')

    junior = Junior.query.filter_by(email=email).first()
    if junior and junior.check_password(password):
        if remember_me:
            login_user(junior, remember=True) # Log in with the existing user with remember me on
        else: 
            login_user(junior) # Log in with the existing user with remember me off
        return jsonify({'message': 'success'})
    elif not junior:
        return jsonify({'error': 'no_exists'}), 403
    else:
        return jsonify({'error': 'wrong_password'}), 403


@login_manager.user_loader
def load_user(user_id):  # Checks if user is logged-in on every page load.
    if user_id is not None:
        return Junior.query.get(user_id)
    return None


@login_manager.unauthorized_handler
def unauthorized(): # Redirect unauthorized users to Login page.
    return jsonify({'error': 'must_login'}), 403 


@login_required 
# @login_manager.user_loader determines wether or not the user is logged in
# & @login_manager.unauthorized_handler - if the user is not logged in
def junior_logout():
    # pdb.set_trace()
    logout_user()
    return jsonify({'message': 'success'})
