import React from 'react';
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import classes from './TeamComponent.module.css';

const TeamComponent = props => {

    return (
        <div className={classes.TeamItem}>
            <MDBCol style={{ maxWidth: "22rem"}}>
                <MDBCard style={{boxShadow: "0 8px 6px -6px #4d4d4d"}}>
                    <MDBCardImage 
                        className={classes.img_fluid} 
                        src={props.cardImage}
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.cardTitle}</MDBCardTitle>
                        <MDBCardText>{props.cardText}</MDBCardText>
                        <MDBBtn className="col-sm-4" href={props.cardFB} target="_blank">
                            <FaFacebookSquare size={30}/></MDBBtn>
                        <MDBBtn className="col-sm-4" href={props.cardLD} target="_blank">
                            <FaLinkedin size={30}/></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default TeamComponent;
