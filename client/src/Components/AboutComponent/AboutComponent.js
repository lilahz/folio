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
           <h1 className={classes.AboutComponent}>קצת עלינו</h1>
           {/* <h3 className={classes.AboutComponent}>Our Work</h3>
           <p className={classes.AboutComponent}>
                Creating a platform that connects juniors to non-profits 
                organizations and small businesses. The juniors will gain
                the experience they lack of and the businesses will receive 
                the services they need.
            </p> */}
            <p className={classes.AboutComponent} style={{textAlignVertical: "center",textAlign: "right",}} dir="rtl">
            אנחנו איילת, לילך ואורון, סטודנטים שנה שלישית למדעי המחשב באוניברסיטת בן גוריון שבנגב,<br></br> 
            מבקשים לפתח מיזם חברתי- עסקי שעונה על פער קריטי בתחום תעסוקת בוגרי אקדמיה צעירים.<br></br>
            הרעיון בתמצית, הינו יצירת פלטפורמה המחברת בין הצעירים לבין עסקים או ארגונים ומאפשרת לצעירים <br></br>
            לרכוש נסיון תעסוקתי בתחום התמחותם ובה בעת לייצר ערך וכח עבודה עדכני ואיכותי לעסקים באותו התחום.
            </p>
            <h3 className={classes.AboutComponent}>
                Meet <b>PRO</b><span className={classes.AboutComponent}>jects </span>Team
            </h3>
            <Row style={RowStyle}>
                <TeamComponent className="col-sm-4"
                            cardImage={picOron}
                            cardTitle="אורון לאופמן" 
                            cardText="סטודנט באוניברסיטת בן גוריון"
                            cardFB="https://www.facebook.com/oron.laufman"
                            cardLD="https://www.linkedin.com/in/oronlaufman/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picLilah}
                            cardTitle="לילך זיטניצקי" 
                            cardText="סטודנט באוניברסיטת בן גוריון"
                            cardFB="https://www.facebook.com/lilahz"
                            cardLD="https://www.linkedin.com/in/lilah-zitnitzky/" />
                <TeamComponent className="col-sm-4"
                            cardImage={picAyelet}
                            cardTitle="איילת בירן" 
                            cardText="סטודנט באוניברסיטת בן גוריון"
                            cardFB="https://www.facebook.com/ayelet.biran"
                            cardLD="https://www.linkedin.com/in/ayelet-biran-46b4ab147/" />
            </Row>
       </div>
    )
}

export default AboutComponent;