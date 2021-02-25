import React from 'react';
import {Button} from 'react-bootstrap';

import './LandingComponent.css';
import logo from './images/landing_image.png';

const registerClickHandler = () => {
    console.log("registering");
}

const LandingComponent = () => {
    return (
        <div className="Landing">
            <div className="LandingLeft">
                <h1><b>PRO</b><span>jects</span></h1>
                <p>Creating a platform that connects juniors to non-profits organizations and small businesses.
                    The juniors will gain the experience they lack of and the businesses will receive the services they need.
                </p>
                <div className="Buttons">
                    <Button 
                        href="/login"
                        variant="outline-secondary"
                        style={{margin: "8px"}}
                        block>
                            LOG IN
                    </Button>
                    <Button 
                        href="/register"
                        variant="outline-secondary"
                        style={{margin: "8px"}}
                        block
                        onClick={registerClickHandler}>
                            REGISTER
                    </Button>
                </div>
            </div>
            <div className="LandingRight">
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default LandingComponent;