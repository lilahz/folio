import React, {Component} from 'react';
import {View, Mask, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBBtn, MDBCardText} from 'mdbreact';
import '../ItemComponent.css';
import JuniorModalComponent from './JuniorModalComponent';
import {field_array} from '../data';


class JuniorComponent extends Component {
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
    
    fieldArrayIconForCard = (juniorFields) => (
        juniorFields.slice(0,3).map((field) => (
                (this.findArrayElementByField(field) === undefined ? "" : this.ValueOption(this.findArrayElementByField(field)))))
    );

    fieldArrayIconForLearnMore = (juniorFields) => (
        juniorFields.map((field) => (
                (this.findArrayElementByField(field) === undefined ? "" : this.ValueOption(this.findArrayElementByField(field)))))
    );

    render () {
        return (
            <div className="Item">
                <MDBCol>
                    <MDBCard className="Card">
                    <View hover zoom>
                        <MDBCardImage 
                            className="Picture" 
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            waves />
                        <Mask className="flex-center"overlay="white-light">
                            <MDBBtn onClick = { this.toggle }>קצת פרטים</MDBBtn>
                        </Mask>
                    </View>
                    <MDBCardBody className="Body">
                        <MDBCardTitle className="Title">{this.props.cardTitle}</MDBCardTitle>
                        <MDBCardText className="Fields">{this.fieldArrayIcon(this.props.cardField)}</MDBCardText>
                    </MDBCardBody>
                    <JuniorModalComponent className="Modal"
                        isOpen={this.state.modal} 
                        toggle={this.toggle}
                        modalTitle={this.props.cardTitle}
                        modalDescription={this.props.cardText}
                        modalField={this.fieldArrayIconForLearnMore(this.props.cardField)}
                        modalEmail={this.props.cardEmail}
                        modalPersonalURL={this.props.cardPersonalURL}
                        modalFacebookURL={this.props.cardFacebookURL}
                        modalInstagramURL={this.props.cardInstagramURL}
                        modalLinkedInURL={this.props.cardLinkedInURL}
                        modalGitHubURL={this.props.cardGitHubURL}
                    />
                    </MDBCard>
                </MDBCol>
            </div>
        )
    }
}

export default JuniorComponent;