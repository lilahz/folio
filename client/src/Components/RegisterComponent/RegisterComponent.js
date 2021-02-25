import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import classes from './RegisterComponent.module.css';
import RegisterForm from './RegisterForm';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: null,
        }
    };

    showCompanyForm = () => {
        this.setState({userType: 'company'});
        console.log("current state ", this.state)
    }

    render() {
        return (
            <div className={classes.RegisterComponent}>
                {this.state.userType === null && (
                    <div>
                        <h1>register</h1>
                        <h3>who are you?</h3>
                        <div className={classes.Buttons}>
                            <Button
                                className={classes.Button}
                                variant="outline-secondary"
                                style={{margin: "8px"}}
                                onClick={this.showCompanyForm}
                                block>
                                    company
                            </Button>
                            <Button
                                className={classes.Button}
                                href="/register/junior"
                                variant="outline-secondary"
                                style={{margin: "8px"}}
                                block>
                                    junior
                            </Button>
                        </div>
                    </div>
                )}

                {this.state.userType === 'company' && (
                    <RegisterForm />
                )}
            </div>
        )
    }
}

export default RegisterComponent;