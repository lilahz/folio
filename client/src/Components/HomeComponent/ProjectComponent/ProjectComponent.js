import React, {Component} from 'react';
import {View, Mask, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle ,MDBBtn, MDBCardText} from 'mdbreact';

import '../ItemComponent.css';
import classes from './ProjectComponent.module.css';
import ProjectModalComponent from './ProjectModalComponent';
import {field_array} from '../data';

class ProjectComponent extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }

    ValueOption = (field) => (
        <div>
            {field.icon}
            {field.label}
        </div >
    );
    
    findArrayElementByField = (fieldValue) => (
        field_array.find((element) => {
          return element.value === fieldValue;
        })
    );
    
    fieldArrayIcon = (projectFields) => (
        projectFields.slice(0,3).map((field) => (
                (this.findArrayElementByField(field) === undefined ? "" : this.ValueOption(this.findArrayElementByField(field)))))
    );

    render () {
        return (
            <div className="Item">
                <MDBCol style={{ maxWidth: "22rem"}}>
                    <MDBCard className={classes.ProjectComponent} style={{boxShadow: "0 8px 6px -6px #4d4d4d"}} background='white'>
                    <View hover zoom>
                        <MDBCardImage
                            className="img-fluid rounded mb-0 "
                            src={this.props.cardImage 
                                ? `data:image/jpeg;base64,${this.props.cardImage}` 
                                : "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"}                            waves />
                        <Mask className="flex-center" overlay="white-light">
                            <MDBBtn onClick = { this.toggle }>קצת פרטים</MDBBtn>
                        </Mask>
                    </View>
                        <MDBCardBody className={classes.ProjectBody}>
                            <MDBCardTitle className={classes.ProjectTitle}>{this.props.cardTitle}</MDBCardTitle>
                            <MDBCardText className={classes.ProjectText}>{this.fieldArrayIcon(this.props.cardField)}</MDBCardText>
                        </MDBCardBody>
                        <ProjectModalComponent className="Modal"
                            isOpen={this.state.modal} 
                            toggle={this.toggle}
                            modalTitle={this.props.cardTitle}
                            modalCardProjectDesc={this.props.cardProjectDesc}
                            modalCardCompDesc={this.props.cardCompDesc}
                            modalField={this.fieldArrayIcon(this.props.cardField)}
                            modalEmail={this.props.cardEmail}
                            modalCompanyURL={this.props.cardCompanyURL}
                            modalFacebookURL={this.props.cardFacebookURL}
                            modalInstagramURL={this.props.cardInstagramURL}
                        />
                    </MDBCard>
                </MDBCol>
            </div>
        )
    }
}

export default ProjectComponent;