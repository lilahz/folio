import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import { FaFacebookSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';
import {Row} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

class ProjectModalComponent extends Component {

render() {
  return (
    <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
        //size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-70w"
        className="projectModal"
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Project for {this.props.modalTitle}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p> Searching for help with: {this.props.modalField} </p>
            <p> Description: {this.props.modalDescription} </p>
        </Modal.Body>
        <Modal.Footer>
            <Row>
                <MDBBtn className="col-sm-4" href="#">
                                <FaFacebookSquare size={30}/></MDBBtn>
                <MDBBtn className="col-sm-4" href="#">
                                <FaLinkedin size={30}/></MDBBtn>
                <MDBBtn className="col-sm-4" href="#">
                                <FaEnvelopeSquare size={30}/></MDBBtn>
            </Row>        
        </Modal.Footer>
    </Modal>
    );
  }
}

export default ProjectModalComponent;