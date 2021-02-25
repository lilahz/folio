import React, {Component} from 'react';
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter ,MDBBtn, MDBCardText} from 'mdbreact';
import '../ItemComponent.css';
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
                    <MDBCard style={{boxShadow: "0 8px 6px -6px #4d4d4d"}} background='white'>
                        <MDBCardImage
                            className="img-fluid rounded mb-0 "
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            waves />
                        <MDBCardBody className="ItemBody">
                            <MDBCardTitle className="text-center">{this.props.cardTitle}</MDBCardTitle>
                            <MDBCardText className="indigo-text">{this.fieldArrayIcon(this.props.cardField)}</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="ItemFooter">
                            <MDBBtn onClick = { this.toggle }>Learn More</MDBBtn>
                            <ProjectModalComponent className="Modal"
                                isOpen={this.state.modal} 
                                toggle={this.toggle}
                                modalTitle={this.props.cardTitle}
                                modalDescription={this.props.cardText}
                                modalField={this.fieldArrayIcon(this.props.cardField)}
                            />
                        </MDBCardFooter>
                                
                    </MDBCard>
                </MDBCol>
            </div>
        )
    }
}

export default ProjectComponent;