import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, FormGroup, FormFeedback, Input} from 'reactstrap';
import { Alert } from 'reactstrap';


class RegisterCompanyModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    onShowAlert = (toggle) =>{
        this.setState({visible:true},()=>{
          window.setTimeout(()=>{
            toggle();
            this.setState({visible:false})
          },3000)
        });
    }

    validate = () => {
        var linkPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        let errors = {};
        if (this.state.company_name === '') errors.company_name = 'Please enter your company name.';
        if(!emailPattern.test(this.state.email)) errors.email = 'Invalid email address.';
        if (this.state.password === '') errors.password = 'Please enter a password.';
        if(this.state.password !== this.state.confirm_password) errors.confirm_password = 'Passwords do not match.';
        if(!linkPattern.test(this.state.website)) errors.website = 'Passwords do not match.';
        if (this.state.about_me === '') errors.about_me = 'Please tell us about_me your company.';

        return errors;
    }

    getInitialState = () => ({
        company_name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        website: '',
        about_me: '',
        errors: {},
        visible: false
    });

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    submitForm = (data) => {
        const url = '/auth/company_register';
        const requestOptions = {
            method: 'POST',
            cache: "no-cache",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        const data = { "company_name":this.state.company_name, 
                        "email":this.state.email,
                        "password":this.state.password,
                        "phone_number":this.state.phone_number,
                        "website":this.state.website,
                        "about_me":this.state.about_me };
        if (Object.keys(errors).length === 0) {
            console.log(data);
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
                        Company Created Successfully!</Alert> : null;
        return (
            <div>
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerCompanyModal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> Register Company </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form> 
                <FormGroup>
                    <Input id="company_name" type="text" value={this.state.company_name} onChange={this.handleChange} 
                        invalid={errors.company_name ? true : false} placeholder="* Company Name"/>
                    <FormFeedback>{errors.company_name}</FormFeedback>
                </FormGroup> <br></br>

                <FormGroup>
                    <Input id="email" type="email" value={this.state.email} onChange={this.handleChange}
                        invalid={errors.email ? true : false} placeholder="* Email" />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup><br></br>

                <FormGroup>
                    <Input id="password" type="password" value={this.state.password} onChange={this.handleChange}
                        invalid={errors.password ? true : false} placeholder="* Password" />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup> <br></br>

                <FormGroup>
                    <Input id="confirm_password" type="password" value={this.state.confirm_password} onChange={this.handleChange}
                        invalid={errors.confirm_password ? true : false} placeholder="* Confirm Password" />
                    <FormFeedback>{errors.confirm_password}</FormFeedback>
                </FormGroup> <br></br>

                <FormGroup>
                    <Input id="phone_number" type="tel" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number" />
                </FormGroup> <br></br>

                <FormGroup>
                    <Input id="website" type="text" value={this.state.website} onChange={this.handleChange}
                        invalid={errors.website ? true : false} placeholder="* Your Vanity URL" />
                    <FormFeedback>{errors.website}</FormFeedback>
                </FormGroup> <br></br>

                <FormGroup>
                     <Input id="about_me" type="text" value={this.state.about_me} onChange={this.handleChange}
                        invalid={errors.about_me ? true : false} placeholder="* Tell us about_me your company" />
                    <FormFeedback>{errors.about_me}</FormFeedback>
                </FormGroup> <br></br>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleSubmit}> Submit </Button>       
                </Modal.Footer>
                {showAlert}
            </Modal>
            </div>
        );
    }
}

export default RegisterCompanyModalComponent;