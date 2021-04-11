import React from 'react';
import {Row} from 'react-bootstrap';

import JuniorComponent from './JuniorComponent';
import './JuniorsComponent.css';

export default function JuniorsComponent(props) {

    return <div className="JuniorsComponent">
                <Row >
                    {props.juniors.map((junior) => (
                        <JuniorComponent key={junior.id} className="col-sm-4"
                            cardTitle={junior.full_name} 
                            cardText={junior.about_me} 
                            cardField={junior.field}
                            cardEmail={junior.email}
                            cardPersonalURL={junior.personal_url}
                            cardFacebookURL={junior.facebook_url}
                            cardInstagramURL={junior.instagram_url}
                            cardLinkedInURL={junior.linkedIn_url}
                            cardGitHubURL={junior.gitHub_url}
                            />))}
                </Row>
    </div>
}