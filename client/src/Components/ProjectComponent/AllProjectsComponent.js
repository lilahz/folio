import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import ProjectComponent from './ProjectComponent';
import FilterProjectComponent from './FilterProjectsComponent';
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
            const field_array = [{ value: 'marketing', label: 'Marketing' },
                                 { value: 'appdev', label: 'App Development' },
                                 { value: 'webdev', label: 'Web Development' },
                                 { value: 'logodesign', label: 'Logo Design' },
                                 { value: 'webdesign', label: 'Web Design' },
                                 { value: 'logodesign', label: 'Logo Design' },
                                 { value: 'finaid', label: 'Financial Aid' },
                                 { value: 'legalaid', label: 'Legal Aid' },
                                 { value: 'sales', label: 'Sales' }]

            const status_array = [{value: 'todo', label: 'To Do'},
                                    {value: 'inprogress', label: 'In Progress'},
                                    {value: 'done', label: 'Done'}]

            const projects_array = (<Row style={RowStyle}>
                {items.map((project) => (
                    <ProjectComponent className="col-sm-4"
                        cardTitle={project.company_name} 
                        cardText={project.description} 
                        cardLink="#"/>))}
                </Row>)
            return <div className="ProjectsList" style={this.state}>
                        <h1 class="ProjectListHeader">All of Our Projects</h1>
                        <div class="container">
                            <div className="row justify-content-center" style={{margin: '30px', }}>
                                <div className="col-4 text-center" 
                                    style={{marginRight: '30px'}}>
                                    <FilterProjectComponent
                                                        options={field_array}
                                                        filterName="Filter by Field"/>
                                </div>
                                <div className="col-4 text-center" style={{marginLeft: '30px'}}>
                                    <FilterProjectComponent 
                                                        options={status_array}
                                                        filterName="Filter by Status"/>
                                </div>
                            </div>
                        </div>
                        {projects_array}
                    </div>
        }            
    }
}

export default AllProjectComponent;