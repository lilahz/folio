import React from 'react';
import {Button} from 'react-bootstrap';

import classes from './LandingComponent.module.css';
import logo from './images/landing_image.png';

const LandingComponent = () => {
    return (
        <div className={classes.Landing}>
            <div className={classes.LandingLeft}>
                <h1><b>PRO</b><span>jects</span></h1>
                <p>Creating a platform that connects juniors to non-profits organizations and small businesses.
                    The juniors will gain the experience they lack of and the businesses will receive the services they need.
                </p>
                <div>
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
                        block>
                            REGISTER
                    </Button>
                </div>
            </div>
            <div className={classes.LandingRight}>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default LandingComponent;