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
                            />))}
                </Row>
    </div>
}