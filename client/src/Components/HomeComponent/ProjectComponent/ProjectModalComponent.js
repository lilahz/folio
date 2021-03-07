import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';
import { FaFacebookSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';
import {IoPersonAdd} from 'react-icons/io5'
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
            About Us: {this.props.modalCardCompDesc}<br /><br />
            Searching for help with: {this.props.modalField} <br />
            Project Description: {this.props.modalCardProjectDesc}
        </Modal.Body>
        <Modal.Footer>
            <Row>
                <Tooltip title="Join Project" placement="left-start" TransitionComponent={Fade} enterDelay={100} leaveDelay={100}>
                    <MDBBtn className="float-left" href="#" >
                        <IoPersonAdd size={40}/></MDBBtn>
                </Tooltip>
                <div className="float-right">
                    <MDBBtn className="col-sm-4" href="#">
                                    <FaFacebookSquare size={30}/></MDBBtn>
                    <MDBBtn className="col-sm-4" href="#">
                                    <FaLinkedin size={30}/></MDBBtn>
                    <MDBBtn className="col-sm-4" href="#">
                                    <FaEnvelopeSquare size={30}/></MDBBtn>
                </div>
            </Row>        
        </Modal.Footer>
    </Modal>
    );
  }
}

export default ProjectModalComponent;