import React from 'react';
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import './TeamComponent.css';

const TeamComponent = props => {

    return (
        <div className="TeamItem">
            <MDBCol style={{ maxWidth: "22rem"}}>
                <MDBCard style={{boxShadow: "0 8px 6px -6px #4d4d4d"}}>
                    <MDBCardImage 
                        className="img-fluid" 
                        src={props.cardImage}
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.cardTitle}</MDBCardTitle>
                        <MDBCardText>{props.cardText}</MDBCardText>
                        <MDBBtn className="col-sm-4" href={props.cardFB}>
                            <FaFacebookSquare size={30}/></MDBBtn>
                        <MDBBtn className="col-sm-4" href={props.cardLD}>
                            <FaLinkedin size={30}/></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default TeamComponent;
