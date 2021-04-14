import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';
import { FaFacebookSquare, FaInstagramSquare, FaEnvelopeSquare, FaHome} from 'react-icons/fa';
import {IoPersonAdd} from 'react-icons/io5'
import {Row} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

class ProjectModalComponent extends Component {

    render() {
        const email_button = 
        <MDBBtn className="col-sm-2" href={"mailto:" + this.props.modalEmail + "?subject=Bla"}>
            <FaEnvelopeSquare size={25}/>
        </MDBBtn>
        const companyURL_button = this.props.modalCompanyURL ? <MDBBtn className="col-sm-2" href={this.props.modalCompanyURL}><FaHome size={25}/></MDBBtn> : null;
        const facebookURL_button = this.props.modalFacebookURL ? <MDBBtn className="col-sm-2" href={this.props.modalFacebookURL}><FaFacebookSquare size={25}/></MDBBtn> : null;
        const instagramURL_button = this.props.modalInstagramURL ? <MDBBtn className="col-sm-2" href={this.props.modalInstagramURL}><FaInstagramSquare size={25}/></MDBBtn> : null;

        return (
            <Modal show={this.props.isOpen} onHide={this.props.toggle} key={this.props.key}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-70w"
                className="projectModal">
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    פרוייקט בשביל <b>{this.props.modalTitle}</b>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign: "right"}}>
                    <u>קצת עלינו</u><br/> {this.props.modalCardCompDesc}<br /><br />
                    <u>מחפשים עזרה בתחום</u><br/>{this.props.modalField} <br />
                    <u>קצת על הפרוייקט</u><br/>{this.props.modalCardProjectDesc}
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Tooltip title="Join Project" placement="left-start" TransitionComponent={Fade} enterDelay={100} leaveDelay={100}>
                            <MDBBtn className="float-left col-sm-2" href="#" >
                                <IoPersonAdd size={25}/></MDBBtn>
                        </Tooltip>
                        <div className="float-right">
                           {email_button}
                           {companyURL_button}
                           {facebookURL_button}
                           {instagramURL_button}
                        </div>
                    </Row>        
                </Modal.Footer>
            </Modal>
            );
        }
}

export default ProjectModalComponent;