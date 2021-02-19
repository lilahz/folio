import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import ProjectComponent from './ProjectComponent';
// import FilterProjectsComponent from './FilterProjectsComponent';
import './ProjectComponent.css';
import './AllProjectsComponent.css';

class AllProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: "lightskyblue",
            animation: "null",
            error: null,
            isLoaded: false,
            items: []
        }
    }

    scrollEventHandler = (event) => {
        if (window.scrollY > 300) {
            this.setState({
                background: "linear-gradient(to bottom, #87cefa 10%, #a6c5d9 100%, #000000 100%)",
                animation: "grow 360s  linear 10ms" 
            });
        }
        else {
            this.setState({
                background: "lightskyblue",
                animation: "null"
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventHandler);
        fetch("/home/projects")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render () {
        const RowStyle = {
            marginLeft: "5%",
            marginRight: "5%",
        }
        const { error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: { error.message }</div>}
        else if (!isLoaded) {
            return <div>Loading...</div>}
        else { 
            // const field_array = ["Marketing", "App Development", "Web Development",
            //                     "Logo Design", "Web Design", "Financial Aid", "Legal Aid", "Sales"]
            // const status_array = ["Not Started", "In Progress", "Completed"]
            
            const projects_array = (<Row style={RowStyle}>
                {items.map((project) => (
                    <ProjectComponent className="col-sm-4"
                        cardTitle={project.company_name} 
                        cardText={project.description} 
                        cardLink="#"/>))}
                </Row>)
            return <div className="ProjectsList" style={this.state}>
                        <h1 class="ProjectListHeader">All of Our Projects</h1>
                        {/* <FilterProjectsComponent className="FilterComp"
                                                 optionArray={field_array}
                                                 filterName="fieldFilter"/>
                        <FilterProjectsComponent className="FilterComp"
                                                optionArray={status_array}
                                                filterName="statusFilter"/> */}
                        {projects_array}
                    </div>
        }            
    }
}

export default AllProjectComponent;