import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Spinner, Alert} from 'reactstrap';
import axios from 'axios';
import {RegisterJuniorFormFirst, RegisterJuniorFormSecond} from './RegisterJuniorForm';

class RegisterJuniorModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        field: [],
        website: [{label: 'אתר אישי', url: ''}],
        about_me: '',
        profile_picture: '',
        errors: {},
        submit_error: '',
        visible_success: false,
        visible_error: false,
        loading: false,
        currentModal: 0,
    });

    onShowAlert = () =>{
        this.setState({visible_success:true},()=>{
          window.setTimeout(()=>{
            // toggle();
            this.setState({visible_success:false})
          },3000)
        });
    }

    validateFirst = () => {
        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let errors = {};

        if (this.state.full_name === '') errors.full_name = 'שדה זה הינו חובה.';
        if(!emailPattern.test(this.state.email)) errors.email = 'שדה זה הינו חובה.';
        if (this.state.password === '') errors.password = 'שדה זה הינו חובה.';
        if(this.state.password !== this.state.confirm_password) errors.confirm_password = 'הסיסמאות לא תואמות.';

        return errors;
    }

    validateSecond = () => {
        // var linkPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        let errors = {};
        
        if (this.state.field === [] | this.state.field === null) errors.field = 'שדה זה הינו חובה.';
        // if(!linkPattern.test(this.state.website)) errors.website = 'Invalid URL.';
        if (this.state.about_me === '') errors.about_me = 'שדה זה הינו חובה.';

        return errors;
    }

    // handle input change
    handleChangeWebsite = (e, index, field) => {
        const { value } = e.target;
        const values = this.state.website;
        field === 'label' ? values[index]['label'] = value : values[index]['url'] = value;
        this.setState({website: values});
    };

    // handle click event of the Remove button
    handleRemoveClick = index => {
        const list = [
            ...this.state.website.slice(0, index),
            ...this.state.website.slice(index + 1)
          ]
        this.setState({website: list});
    };
    
    // handle click event of the Add button
    handleAddClick = () => {
        const values = this.state.website;
        values.push({
            label: 'אתר אישי',
            url: ''
        });
        this.setState({website : values});
    };

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

    _handleReaderLoaded = (readerEvt) => {
        let binaryString = btoa(readerEvt.target.result);
        // console.log("binary string : " + binaryString);
        this.setState({profile_picture: binaryString});
    }

    handleChangePicture = selected => {
        let file = selected.target.files[0];
        // console.log("selected : " , file);
        if(file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    submitForm = (data) => {
        this.setState({loading:true}, () => {
            const url = '/api/auth/junior_register';
            axios.post(url, data)
            .then(response => {
                this.setState({loading: false});
                this.setState({visible_success : true});
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

    handleSubmit = () => {
        const errors = this.validateSecond();
        const data = { "full_name":this.state.full_name, 
                        "email":this.state.email,
                        "password":this.state.password,
                        "phone_number":this.state.phone_number,
                        "field":this.state.field,
                        "about_me":this.state.about_me,
                        "profile_picture":this.state.profile_picture };

        for (var x in this.state.website) {
            var datum = this.state.website[x];
            switch(datum.label) {
                case "אתר אישי" :
                    data["personal_url"] = datum.url;
                    break;
                case "פייסבוק" :
                    data["facebook_url"] = datum.url;
                    break;
                case "אינסטגרם" :
                    data["instagram_url"] = datum.url;
                    break;
                case "לינקדין" :
                    data["linkedIn_url"] = datum.url;
                    break; 
                case "גיטהאב" :
                    data["gitHub_url"] = datum.url;
                    break; 
                default:
                    break;
            }
        }

        if (Object.keys(errors).length === 0) {
            console.log("data : ", data);
            this.submitForm(data); // send the data to the server
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
        const { errors, loading, submit_error} = this.state;
        const submit_button = <Button variant="primary" onClick={this.handleSubmit}>
                            {!loading ? "אישור": null }
                            {loading ? (<Spinner style={{ width: '1.1rem', height: '1.1rem' }} color="light"/> ) : null}
                        </Button>

        const showAlertSuccess = this.state.visible_success ? 
            <Alert style={{textAlign:"center"}} color="success">
                חשבון נוצר בהצלחה!</Alert> : null;
                
        const error_message = 
            submit_error === 'already_login' ? 'מישהו כבר מחובר לאתר' :
            submit_error === 'no_exists' ? 'לא קיים חשבון עם המייל הזה' :
            submit_error === 'wrong_password' ? 'סיסמא שגויה' : 
            submit_error === 'already_exists' ? 'חשבון עם מייל זה כבר קיים' :
            'אפוס, שגיאה כללית!' ;

        const showAlertError = this.state.visible_error ? 
                <Alert style={{textAlign:"center"}} color="danger">
                    {error_message}</Alert> : null;        

        return (
            <div> {this.state.currentModal === 0 ? 
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerJuniorModal">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter"> יצירת חשבון </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <RegisterJuniorFormFirst errors={errors} state={this.state} handleChange={this.handleChange}/>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="primary" onClick={this.handleNext}> הבא </Button>
                </Modal.Footer>
            </Modal> 
            :
            this.state.currentModal === 1 ? 
            <Modal show={this.props.isOpen} onHide={this.props.toggle}
                aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-70w" className="registerJuniorModal">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter"> יצירת חשבון </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <RegisterJuniorFormSecond errors={errors} state={this.state} handleChange={this.handleChange} 
                        handleChangeField={this.handleChangeField} handleChangeWebsite={this.handleChangeWebsite}
                        handleRemoveClick={this.handleRemoveClick} handleAddClick={this.handleAddClick} handleChangePicture={this.handleChangePicture}/>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="primary" onClick={this.handlePrev}> קודם </Button>    
                    {submit_button}               
                </Modal.Footer>
                {showAlertSuccess}
                {showAlertError}
            </Modal> : null }
            </div>
        );
    }
}

export default RegisterJuniorModalComponent;