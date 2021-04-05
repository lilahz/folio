import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, FormGroup, FormFeedback, Input, Col, Row} from 'reactstrap';
import { Alert } from 'reactstrap';
import axios from 'axios';
import FilterComponent from '../HomeComponent/FilterComponent';
import {field_array} from '../HomeComponent/data';


class RegisterJuniorModalComponent extends Component {
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

    validateSecond = () => {
        var linkPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        let errors = {};
        
        if (this.state.field === [] | this.state.field === null) errors.field = 'Please enter your field of work.';
        if(!linkPattern.test(this.state.website)) errors.website = 'Invalid URL.';
        if (this.state.about_me === '') errors.about_me = 'Please tell us about_me your Junior.';

        return errors;
    }

    validateFirst = () => {
        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let errors = {};

        if (this.state.full_name === '') errors.full_name = 'Please enter your full name.';
        if(!emailPattern.test(this.state.email)) errors.email = 'Invalid email address.';
        if (this.state.password === '') errors.password = 'Please enter a password.';
        if(this.state.password !== this.state.confirm_password) errors.confirm_password = 'Passwords do not match.';

        return errors;
    }

    getInitialState = () => ({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        field: [],
        website_label: '',
        website: '',
        about_me: '',
        errors: {},
        visible: false,
        currentModal: 0,
    });

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleChangeField = selected => {
        if (selected === null || selected.length === 0) {
            this.setState({field: []})
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            this.setState({field: valuesArrObj});
        }
    }

    submitForm = (data) => {
        const url = '/api/auth/junior_register';
        axios.post(url, data)
        .then(response => {
            console.log("respone" + response);
            console.log("respone data" + response.data);
            localStorage.setItem('currentUserEmail', data.email);
            localStorage.setItem('currentUserType', "junior");
        })
    }

    handleSubmit = (toggle) => {
        const errors = this.validateSecond();
        const data = { "full_name":this.state.full_name, 
                        "email":this.state.email,
                        "password":this.state.password,
                        "phone_number":this.state.phone_number,
                        "field":this.state.field,
                        "website_label":this.state.website_label,
                        "website":this.state.website,
                        "about_me":this.state.about_me };

        if (Object.keys(errors).length === 0) {
            this.submitForm(data); // send the data to the server
            this.setState(this.getInitialState()); // if success, reset all fields
            this.onShowAlert(toggle);
        } else {
            this.setState({ errors : errors });
        }
    }

    handleNext = () => {
        const errors = this.validateFirst();
        if (Object.keys(errors).length === 0) {
            this.setState({currentModal: 1 });
        } 
        else {
            this.setState({ errors : errors });
        }
    }

    handlePrev = () => {
        this.setState({currentModal: 0 });
    }

    render() {
        const { errors } = this.state;
        const showAlert = this.state.visible ? <Alert style={{textAlign:"center"}} variant="success"> מתמחה נוצר בהצלחה! </Alert> : null;        

        return (
            <div> {this.state.currentModal === 0 ? 
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerJuniorModal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> יצירת חשבון </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                    <FormGroup>
                        <Input id="full_name" type="text" value={this.state.full_name} onChange={this.handleChange} 
                            invalid={errors.full_name ? true : false} placeholder="שם מלא *"/>
                        <FormFeedback>{errors.full_name}</FormFeedback>
                    </FormGroup> <br></br>
                    <FormGroup>
                        <Input id="email" type="email" value={this.state.email} onChange={this.handleChange}
                            invalid={errors.email ? true : false} placeholder="מייל *" />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup><br></br>
                    <FormGroup>
                        <Input id="password" type="password" value={this.state.password} onChange={this.handleChange}
                            invalid={errors.password ? true : false} placeholder="סיסמא *" />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup> <br></br>
                    <FormGroup>
                        <Input id="confirm_password" type="password" value={this.state.confirm_password} onChange={this.handleChange}
                            invalid={errors.confirm_password ? true : false} placeholder="חזור על הסיסמא *" />
                        <FormFeedback>{errors.confirm_password}</FormFeedback>
                    </FormGroup> <br></br>
                    </Form>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="primary" onClick={this.handleNext}> הבא </Button>
                </Modal.Footer>
                {showAlert}
            </Modal> 
            :
            this.state.currentModal === 1 ? 
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerJuniorModal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> יצירת חשבון </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>  
                    <FormGroup>
                        <Input id="phone_number" type="tel" value={this.state.phone_number} onChange={this.handleChange} placeholder="מספר טלפון" />
                    </FormGroup> <br></br>
                    <FormGroup>
                        <FilterComponent    
                                place_holder = "תחום עיסוק *"
                                filter_array = {field_array}
                                handle_on_change = {this.handleChangeField} 
                        />
                    </FormGroup><br></br>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Input id="website_label" type="select" value={this.state.website_label} onChange={this.handleChange}
                                invalid={errors.website ? true : false}>
                                    <option>Personal Website</option>
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                    <option>LinkedIn</option>
                                    <option>GitHub</option>
                                    </Input>
                        </FormGroup>
                    </Col>   
                    <Col>
                    <FormGroup>
                        <Input id="website" type="text" value={this.state.website} onChange={this.handleChange}
                                invalid={errors.website ? true : false} placeholder="אתר *" />
                    </FormGroup> <br></br>
                    </Col>
                    </Row>
                    <FormGroup>
                        <Input id="about_me" type="text" value={this.state.about_me} onChange={this.handleChange}
                            invalid={errors.about_me ? true : false} placeholder="ספר קצת על עצמך *" />
                        <FormFeedback>{errors.about_me}</FormFeedback>
                    </FormGroup> <br></br>
                    </Form>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="primary" onClick={this.handlePrev}> קודם </Button>    
                    <Button variant="primary" onClick={() => this.handleSubmit(this.props.toggle)}> הירשם </Button>    
                </Modal.Footer>
                {showAlert}
            </Modal> : null }
            </div>
        );
    }
}

export default RegisterJuniorModalComponent;