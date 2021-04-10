import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import {Form, Button, FormGroup, FormFeedback, Input} from 'reactstrap';
import { Alert } from 'reactstrap';
import axios from 'axios';

import { UserContext } from '../../UserContext';

class LoginModalComponent extends Component {
    constructor(props) {
        super(props);
        // TODO: check if possible to use useContext() in some way in class components. 
        this.user = UserContext;
        this.state = this.getInitialState();
    }

    static contextType = UserContext;

    onShowAlert = (toggle) =>{
        this.setState({visible:true},()=>{
          window.setTimeout(()=>{
            toggle();
            this.setState({visible:false})
          },3000)
        });
    }

    validate = () => {
        let errors = {};

        if (this.state.email === '') errors.email = 'Please enter your email.';
        if (this.state.password === '') errors.password = 'Please enter a password.';

        return errors;
    }

    getInitialState = () => ({
        email: '',
        password: '',
        errors: {},
        visible: false
    });

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    submitForm = (data) => {
        let errors = {};
        const url = this.props.url;
        const context = this.context;

        console.log("data : " , data);
        axios.post(url, data)
        .then(response => {
            console.log("respone :", response);
            context.setMail(data.email);
            context.setType(this.props.type);
            // localStorage.setItem('currentUserEmail', data.email);
            // localStorage.setItem('currentUserType', this.props.type);
            this.props.history.push('/');
        })
        .catch(error => { 
            console.log(error.response);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        const data = {"email":this.state.email,
                      "password":this.state.password };

        if (Object.keys(errors).length === 0) {
            // console.log(data);
            this.submitForm(data); // send the data to the server
            // this.setState(this.getInitialState()); // if success, reset all fields
        } else {
            this.setState({ errors });
        }

        //     this.onShowAlert(toggle);
        //     console.log("submited");
    }

    render() {
        const { errors } = this.state;
        const showAlert = this.state.visible ? 
                    <Alert style={{textAlign:"center"}} variant="success">
                        Logged in Successfully!</Alert> : null;
        return (
            <div>
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerCompanyModal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> התחבר </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form> 
                <FormGroup>
                    <Input id="email" type="email" value={this.state.email} onChange={this.handleChange}
                        invalid={errors.email ? true : false} placeholder=" מייל *" />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup><br></br>

                <FormGroup>
                    <Input id="password" type="password" value={this.state.password} onChange={this.handleChange}
                        invalid={errors.password ? true : false} placeholder=" סיסמא *" />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup> <br></br>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleSubmit}> אישור </Button>       
                </Modal.Footer>
                {showAlert}
            </Modal>
            </div>
        );
    }
}

export default withRouter(LoginModalComponent);