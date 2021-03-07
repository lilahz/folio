import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import { Alert } from 'reactstrap';
import FilterComponent from '../HomeComponent/FilterComponent';
import {field_array} from '../HomeComponent/data';

class NewProjectModalComponent extends Component {
    state = {
        company_id: "2",
        field: [],
        status: "todo",
        description: "",
        fieldError: null,
        descriptionError: null,
        visible : false
    }

    onShowAlert = (toggle) =>{
        this.setState({visible:true},()=>{
          window.setTimeout(()=>{
            toggle();
            this.setState({visible:false})
          },3000)
        });
    }

    handleSubmit = (toggle) => {
        // event.preventDefault();
        if(this.state.description === "" && (this.state.field.length === 0 || this.state.field === null)){
            this.setState({
                descriptionError: 'Description is required',
                fieldError: 'Field is required'
            });
        }
        else if(this.state.field.length === 0 || this.state.field === null) {
            this.setState({
                fieldError: 'Field is required',
                descriptionError: null
            });
        }
        else if(this.state.description === "") {
            this.setState({
                descriptionError: 'Description is required',
                fieldError: null
            });
        }
        else {
            const data = { "company_id":this.state.company_id, 
                            "field":this.state.field,
                            "status":this.state.status,
                            "description":this.state.description
                          }

            const url = '/new_project';
            const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    };
            fetch(url, requestOptions)
                .then(res => res.json())
                .catch(error => console.error("Error:", error))
                .then(response => console.log("Success:", response));
            this.setState({
                fieldError: null,
                descriptionError: null,
            });
            this.onShowAlert(toggle);
        }
    }

    onChangefield = selected => {
        let statusFilter = [];
        if(selected != null && selected.length > 0) {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            statusFilter = valuesArrObj;
        }
        this.setState({field: statusFilter});
    }


    render() {
        const showAlert = this.state.visible ? 
                    <Alert style={{textAlign:"center"}} variant="success">
                        Project Created Successfully!</Alert> : null;
        return (
            <div>
            <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-70w"
                className="newProjectModal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> New Project Form </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="validationCustom03">
                        <Form.Label>Company Name : </Form.Label>
                        <Form.Control type="text" placeholder="Company Name" readOnly/>  
            
                        <Form.Label>* Description : (200 max    )</Form.Label>
                        <Form.Control type="text" required maxLength="200"
                            onChange={(e) => this.setState({description: e.target.value})} 
                            value={this.state.description} placeholder="What do you need help with?"/> 
                        <div style={{ color: 'red' }}>{this.state.descriptionError}</div><br/>

                        <Form.Label>* Fields : </Form.Label>
                         <FilterComponent    
                            place_holder = "Choose field of Work"
                            filter_array = {field_array}
                            handle_on_change = {this.onChangefield} 
                        />
                        <div style={{ color: 'red' }}>{this.state.fieldError}</div>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.handleSubmit(this.props.toggle)}> Submit </Button>       
                </Modal.Footer>
                {showAlert}
            </Modal>
            </div>
        );
    }
}

export default NewProjectModalComponent;