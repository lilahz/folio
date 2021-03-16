import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import classes from './LoginComponent.module.css';
import LoginModalComponent from './LoginModalComponent';

class LoginComponent extends Component {
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
            <div className={classes.LoginComponent}>
                <div>
                    <h1>Login</h1>
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
                    <LoginModalComponent className="Modal"
                        isOpen={this.state.companyModal} 
                        toggle={this.toggleCompanyForm}
                        url="/api/auth/company_login"
                    />
                    <LoginModalComponent className="Modal"
                        isOpen={this.state.juniorModal} 
                        toggle={this.toggleJuniorForm}
                        url="/api/auth/junior_login"
                    />
                </div>
            </div>
        )
    }
}

export default LoginComponent;