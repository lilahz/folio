import React from 'react';
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';

import './ProjectComponent.css';

const ProjectComponent = props => {
    return (
        <div className="ProjectItem">
            <MDBCol style={{ maxWidth: "22rem"}}>
                <MDBCard style={{boxShadow: "0 8px 6px -6px #4d4d4d"}}>
                    <MDBCardImage 
                        className="img-fluid" 
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.cardTitle}</MDBCardTitle>
                        <h8 className="indigo-text"><strong>Field</strong></h8>
                        <MDBCardText>{props.cardText}</MDBCardText>
                        <MDBBtn href={props.cardLink}>Learn More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default ProjectComponent;