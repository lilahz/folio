import React, {Component} from 'react';
import {Carousel, Row} from 'react-bootstrap';

import ProjectComponent from './ProjectComponent';
import './ProjectComponent.css';

class ProjectCarouselComponent extends Component {
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
        fetch("/home")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.projects_json
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
            return (<div className="Carousel" style={this.state}>
            <h3>Our Open Projects</h3>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Row style={RowStyle}>
                        {items.slice(0,3).map((project) => (
                            <ProjectComponent cardTitle={project.company_name} cardText={project.description} cardLink="#"/>))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Row style={RowStyle}>
                    {items.slice(3,6).map((project) => (
                            <ProjectComponent cardTitle={project.company_name} cardText={project.description} cardLink="#"/>))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item >
                    <Row style={RowStyle}>
                    {items.slice(6,9).map((project) => (
                            <ProjectComponent cardTitle={project.company_name} cardText={project.description} cardLink="#"/>))}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>)
        }            
    }
}

export default ProjectCarouselComponent;