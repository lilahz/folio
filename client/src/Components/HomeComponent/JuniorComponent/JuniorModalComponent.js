import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import { FaFacebookSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';
import {Row} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

class JuniorModalComponent extends Component {

render() {
  return (
    <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
        //size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-70w"
        className="JuniorModal"
    >
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            {this.props.modalTitle}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: "right"}}>
            יכול/ה לסייע עם: {this.props.modalField} <br />
            קצת עליי: {this.props.modalDescription}
        </Modal.Body>
        <Modal.Footer>
            <Row>
                <MDBBtn className="col-sm-3" href="#">
                                <FaFacebookSquare size={30}/></MDBBtn>
                <MDBBtn className="col-sm-3" href="#">
                                <FaLinkedin size={30}/></MDBBtn>
                <MDBBtn className="col-sm-3" href="#">
                                <FaEnvelopeSquare size={30}/></MDBBtn>
            </Row>        
        </Modal.Footer>
    </Modal>
    );
  }
}

export default JuniorModalComponent;