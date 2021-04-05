from flask import jsonify, request
from flask_login import login_required, logout_user, current_user, login_user

from server.models.Junior import Junior
from server.models import login_manager

def junior_register():
    # Bypass if user is logged in
    if current_user.is_authenticated:
        return jsonify({'message': 'User already logged in'}), 401
        
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
            data.get('website'),
            data.get('about_me')
        )
        new_junior.set_password(password)
        Junior.add_new_junior(new_junior)
        if remember_me:
            login_user(new_junior, remember=True)  # Log in with the newly created user with remember me on
        else: 
            login_user(new_junior)  # Log in with the newly created user with remember me off
        
        return jsonify({'message': 'user created successfully'}), 200
    else:
        return jsonify({'error': 'User already exists with that email address'}), 403


def junior_login():

    # Bypass if user is logged in
    if current_user.is_authenticated:
        return jsonify({'message' : 'User already logged in'}), 401
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
        return jsonify({'message': 'User logged in successfully'})
    elif not junior:
        return jsonify({'error': f'user {email} does not exist'}), 403
    else:
        return jsonify({'error': 'Incorrect password'}), 403


@login_manager.user_loader
def load_user(user_id):  # Checks if user is logged-in on every page load.
    if user_id is not None:
        return Junior.query.get(user_id)
    return None


@login_manager.unauthorized_handler
def unauthorized(): # Redirect unauthorized users to Login page.
    return jsonify({'error': 'You must be logged in to view that page.'}), 403 


@login_required 
# @login_manager.user_loader determines wether or not the user is logged in
# & @login_manager.unauthorized_handler - if the user is not logged in
def junior_logout():
    logout_user()
    return jsonify({'message': 'User logged out successfully'})
