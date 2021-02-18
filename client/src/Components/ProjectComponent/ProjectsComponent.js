import React from 'react';
import {Row} from 'react-bootstrap';

import ProjectComponent from './ProjectComponent';
import './ProjectComponent.css';
import './ProjectsComponent.css';

export default function ProjectsComponent(props) {
    return <div className="projectsComponent">
                <Row >
                    {props.projects.map((project) => (
                        <ProjectComponent key={project.id} className="col-sm-4"
                            cardTitle={project.company_name} 
                            cardText={project.description} 
                            cardField={project.field}
                            cardLink="#"/>))}
                </Row>
    </div>
}