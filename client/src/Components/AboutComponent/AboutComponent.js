import React from 'react';
import {Row} from 'react-bootstrap';

import classes from './AboutComponent.module.css';
import TeamComponent from './TeamComponent';

import picAyelet from './images/ayelet.jpg';
import picOron from './images/oron.jpeg';
import picLilah from './images/lilach.jpeg';

const AboutComponent = () => {
        const RowStyle = {
            marginLeft: "5%",
            marginRight: "5%",
        }
        
    return (
       <div className={classes.AboutComponent}>
           <h1 className={classes.AboutComponent}>About Us</h1>
           <h3 className={classes.AboutComponent}>Our Work</h3>
           <p className={classes.AboutComponent}>
                Creating a platform that connects juniors to non-profits 
                organizations and small businesses. The juniors will gain
                the experience they lack of and the businesses will receive 
                the services they need.
            </p>
            <h3 className={classes.AboutComponent}>
                Meet <b>PRO</b><span className={classes.AboutComponent}>jects </span>Team
            </h3>
            <Row style={RowStyle}>
                <TeamComponent className="col-sm-4"
                            cardImage={picOron}
                            cardTitle="Oron Laufman" 
                            cardText="Student at BGU"
                            cardFB="https://www.facebook.com/oron.laufman"
                            cardLD="https://www.linkedin.com/in/oronlaufman/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picLilah}
                            cardTitle="Lilah Zitnitzky" 
                            cardText="Student at BGU"
                            cardFB="https://www.facebook.com/lilahz"
                            cardLD="https://www.linkedin.com/in/lilah-zitnitzky/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picAyelet}
                            cardTitle="Ayelet Biran" 
                            cardText="Student at BGU"
                            cardFB="https://www.facebook.com/ayelet.biran"
                            cardLD="https://www.linkedin.com/in/ayelet-biran-46b4ab147/" />
            </Row>
       </div>
    )
}

export default AboutComponent;