import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import classes from './RegisterComponent.module.css';
import RegisterCompanyModalComponent from './RegisterCompanyModalComponent';
import RegisterJuniorModalComponent from './RegisterJuniorModalComponent';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyModal: false,
            juniorModal: false
        }
    };

    toggleCompanyForm = () => {
        this.setState({companyModal: !this.state.companyModal});
    }

    toggleJuniorForm = () => {
        this.setState({juniorModal: !this.state.juniorModal});
    }

    render() {
        return (
            <div className={classes.RegisterComponent}>
                <div>
                    <h1>Register</h1>
                    <h3>Who are you?</h3>
                    <div className={classes.Buttons}>
                        <Button
                            className={classes.Button}
                            variant="outline-secondary"
                            style={{margin: "8px"}}
                            onClick={this.toggleCompanyForm}
                            block>
                                Company
                        </Button>
                        <Button
                            className={classes.Button}
                            variant="outline-secondary"
                            style={{margin: "8px"}}
                                onClick={this.toggleJuniorForm}
                            block>
                                Junior
                        </Button>
                    </div>
                    <RegisterCompanyModalComponent className="Modal"
                        isOpen={this.state.companyModal} 
                        toggle={this.toggleCompanyForm}
                    />
                    <RegisterJuniorModalComponent className="Modal"
                        isOpen={this.state.juniorModal} 
                        toggle={this.toggleJuniorForm}
                    />
                </div>
            </div>
        )
    }
}

export default RegisterComponent;