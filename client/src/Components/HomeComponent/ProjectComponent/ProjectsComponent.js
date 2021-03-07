import React from 'react';
import {Row} from 'react-bootstrap';
import ProjectComponent from './ProjectComponent';
import './ProjectsComponent.css';

export default function ProjectsComponent(props) {
    return <div className="projectsComponent">
                <Row >
                    {props.projects.map((project) => (
                        <ProjectComponent key={project.id} className="col-sm-4"
                            cardTitle={project.company_name} 
                            cardProjectDesc={project.description} 
                            cardCompDesc={project.company_description}
                            cardField={project.field}
                            />))}
                </Row>
    </div>
}