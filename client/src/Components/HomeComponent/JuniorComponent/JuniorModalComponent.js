import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { SocialIcon } from 'react-social-icons';

class JuniorModalComponent extends Component {

render() {

    const email_button = <SocialIcon network="mailto" url={"mailto:" + this.props.modalEmail + "?subject=Bla"} />;

    const personalURL_button = this.props.modalPersonalURL 
                                ? <SocialIcon url={this.props.modalCompanyURL} target="_blank" />
                                : null;
    const facebookURL_button = this.props.modalFacebookURL
                                ? <SocialIcon url={this.props.modalFacebookURL} target="_blank" />
                                : null;
    const instagramURL_button = this.props.modalInstagramURL
                                ? <SocialIcon url={this.props.modalInstagramURL} target="_blank" />
                                : null;
    const linkedInURL_button = this.props.modalLinkInURL 
                                ? <SocialIcon url={this.props.modalLinkInURL} target="_blank" />
                                : null;
    const gitHubURL_button = this.props.modalGitHubURL
                                ? <SocialIcon url={this.props.modalGitHubURL} target="_blank" />
                                : null;

    return (
        <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
            //size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-70w"
            className="JuniorModal">
            <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
               <b>{this.props.modalTitle}</b>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: "right"}}>
                <u>יכול/ה לסייע עם</u><br/> {this.props.modalField} <br />
                <u>קצת עליי</u><br/> {this.props.modalDescription}
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