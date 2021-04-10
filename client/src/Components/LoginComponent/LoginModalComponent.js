import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Spinner, Alert } from 'reactstrap';
import axios from 'axios';
import LoginForm from './LoginForm';

class LoginModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        email: '',
        password: '',
        errors: {},
        submit_error: '',
        visible_success: false,
        visible_error: false,
        loading: false
    });

    onShowAlert = () =>{
        this.setState({visible_success:true},()=>{
          window.setTimeout(()=>{
            // toggle();
            this.setState({visible_success:false})
          },3000)
        });
    }

    validate = () => {
        let errors = {};
        if (this.state.email === '') errors.email = 'שדה זה הינו חובה';
        if (this.state.password === '') errors.password = 'שדה זה הינו חובה';
        return errors;
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    submitForm = (data) => {
        this.setState({loading:true}, () => {
            const url = this.props.url;
            console.log("data : " , data);
            axios.post(url, data)
            .then(response => {
                this.setState({loading: false});
                this.setState({visible_error : false});
                console.log("respone :" + response);
                console.log("respone data : " + response.data);
                console.log("response status : " + response.status);
                localStorage.setItem('currentUserEmail', data.email);
                localStorage.setItem('currentUserType', this.props.type);
            })
            .catch(error => {
                this.setState({submit_error: error.response.data.error});
                this.setState({loading: false});
                this.setState({visible_error : true});
                console.log("response status : " , error.response.status); 
                console.log("response error : " , error.response.data.error);
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        const data = {"email":this.state.email,
                      "password":this.state.password };

        if (Object.keys(errors).length === 0) {
            this.submitForm(data); // send the data to the server
        } else {
            this.setState({ errors });
        }
    }


    render() {
        const { errors, loading, submit_error } = this.state;
        const submit_button = <Button variant="primary" onClick={this.handleSubmit}>
                            {!loading ? "אישור": null }
                            {loading ? (<Spinner style={{ width: '1.1rem', height: '1.1rem' }} color="light"/> ) : null}
                        </Button>

        const showAlertSuccess = this.state.visible_success ? 
            <Alert style={{textAlign:"center"}} color="success">
                Logged in Successfully!</Alert> : null;

        const error_message = 
            submit_error === 'already_login' ? 'מישהו כבר מחובר לאתר' :
            submit_error === 'no_exists' ? 'לא קיים חשבון עם המייל הזה' :
            submit_error === 'wrong_password' ? 'סיסמא שגויה' : 
            'אפוס, שגיאה כללית!' ;

        const showAlertError = this.state.visible_error ? 
                    <Alert style={{textAlign:"center"}} color="danger">
                        {error_message}</Alert> : null;        

        return (
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerCompanyModal">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter"> התחבר </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <LoginForm errors={errors} state={this.state} handleChange={this.handleChange}/>
                </Modal.Body>
                 <Modal.Footer>
                     {submit_button}
                 </Modal.Footer>
                 {showAlertSuccess}
                 {showAlertError}
             </Modal>
        )
    }
}

export default LoginModalComponent;