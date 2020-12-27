import React from 'react';
import {Row} from 'react-bootstrap';

import './AboutComponent.css';
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
       <div class="AboutDiv">
           <h1 class="AboutHeader">About Us</h1>
           <h3 class="AboutSubHeaders">Our Work</h3>
           <p class="AboutParagraph">Creating a platform that connects juniors to non-profits 
               organizations and small businesses. The juniors will gain
                the experience they lack of and the businesses will receive 
                the services they need.</p>
            <h3 class="AboutSubHeaders">Meet <b>PRO</b><span>jects </span>Team</h3>
            <Row style={RowStyle}>
                <TeamComponent className="col-sm-4"
                            cardImage={picOron}
                            cardTitle="Oron Laufman" 
                            cardText="Student bla bla"
                            cardFB="https://www.facebook.com/oron.laufman"
                            cardLD="https://www.linkedin.com/in/oronlaufman/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picLilah}
                            cardTitle="Lilah Zitnitzky" 
                            cardText="Student bla bla"
                            cardFB="https://www.facebook.com/lilahz"
                            cardLD="https://www.linkedin.com/in/lilah-zitnitzky/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picAyelet}
                            cardTitle="Ayelet Biran" 
                            cardText="Student bla bla"
                            cardFB="https://www.facebook.com/ayelet.biran"
                            cardLD="https://www.linkedin.com/in/ayelet-biran-46b4ab147/" />
            </Row>
       </div>
    )
}

export default AboutComponent;