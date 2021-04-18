import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import { FaFacebookSquare, FaLinkedinIn, FaEnvelopeSquare, FaGithubSquare, FaInstagramSquare, FaHome } from 'react-icons/fa';
import {Row} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

class JuniorModalComponent extends Component {

render() {

    const email_button = 
        <MDBBtn className="col-sm-2" href={"mailto:" + this.props.modalEmail + "?subject=Bla"}>
            <FaEnvelopeSquare size={25}/>
        </MDBBtn>
    const personalURL_button = this.props.modalPersonalURL ? <MDBBtn className="col-sm-2" href={this.props.modalCompanyURL} target="_blank"><FaHome size={25}/></MDBBtn> : null;
    const facebookURL_button = this.props.modalFacebookURL ? <MDBBtn className="col-sm-2" href={this.props.modalFacebookURL} target="_blank"><FaFacebookSquare size={25}/></MDBBtn> : null;
    const instagramURL_button = this.props.modalInstagramURL ? <MDBBtn className="col-sm-2" href={this.props.modalInstagramURL} target="_blank"><FaInstagramSquare size={25}/></MDBBtn> : null;
    const linkedInURL_button = this.props.modalLinkedInURL ? <MDBBtn className="col-sm-2" href={this.props.modalLinkedInURL} target="_blank"><FaLinkedinIn size={25}/></MDBBtn> : null;
    const gitHubURL_button = this.props.modalGitHubURL ? <MDBBtn className="col-sm-2" href={this.props.modalGitHubURL} target="_blank"><FaGithubSquare size={25}/></MDBBtn> : null;

    return (
        <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
            //size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-70w"
            className="JuniorModal">
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
                    <div className="float-right">
                        {email_button}
                        {personalURL_button}
                        {facebookURL_button}
                        {instagramURL_button}
                        {linkedInURL_button}
                        {gitHubURL_button}
                    </div>
                </Row>        
            </Modal.Footer>
        </Modal>
        );
    }
}

export default JuniorModalComponent;