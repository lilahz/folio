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
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-70w"
        className="projectModal">
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            פרוייקט בשביל {this.props.modalTitle}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: "right"}}>
            קצת עלינו: {this.props.modalCardCompDesc}<br /><br />
            מחפשים עזרה בתחום: {this.props.modalField} <br />
            קצת על הפרוייקט: {this.props.modalCardProjectDesc}
        </Modal.Body>
        <Modal.Footer>
            <Row>
                <Tooltip title="Join Project" placement="left-start" TransitionComponent={Fade} enterDelay={100} leaveDelay={100}>
                    <MDBBtn className="float-right col-sm-2" href="#" >
                        <IoPersonAdd size={30}/></MDBBtn>
                </Tooltip>
                <div className="float-left">
                    <MDBBtn className="col-sm-2" href="#">
                                    <FaFacebookSquare size={30}/></MDBBtn>
                    <MDBBtn className="col-sm-2" href="#">
                                    <FaLinkedin size={30}/></MDBBtn>
                    <MDBBtn className="col-sm-2" href="#">
                                    <FaEnvelopeSquare size={30}/></MDBBtn>
                </div>
            </Row>        
        </Modal.Footer>
    </Modal>
    );
  }
}

export default ProjectModalComponent;