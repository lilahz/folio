import React, {Component} from 'react';
import {Carousel, Row} from 'react-bootstrap';
import axios from 'axios';

import ProjectComponent from './ProjectComponent';
import '../ItemComponent.css';
import classes from './ProjectCarouselComponent.module.css';


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
        axios.get("/api/home/projects")
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data});
            })
    }

    render () {
        const RowStyle = {
            marginLeft: "5%",
            marginRight: "5%",
        }
        const {items} = this.state
        if(items.length === 0)
            return "";
        else {
            let carouselRow1 = <Carousel.Item className={classes.CarouselItem} interval={1500} key={this.props.key}>
                                    <Row style={RowStyle}>
                                        {items.slice(0,3).map((project) => (
                                            <ProjectComponent key={project.id} 
                                                cardTitle={project.company_name} 
                                                cardProjectDesc={project.description} 
                                                cardCompDesc={project.company_description}
                                                cardField={project.field}
                                                cardImage={project.company_profile_picture}
                                                cardEmail={project.company_email}
                                                cardCompanyURL={project.company_url}
                                                cardFacebookURL={project.facebook_url}
                                                cardInstagramURL={project.instagram_url}
                                            /> ))}
                                    </Row>
                                </Carousel.Item>;
            let carouselRow2 = "";
            let carouselRow3 = "";
            if(items.length > 3) {
                carouselRow2 = <Carousel.Item interval={1500} key={this.props.key}>
                                    <Row style={RowStyle}>
                                        {items.slice(3,6).map((project) => (
                                            <ProjectComponent key={project.id} 
                                            cardTitle={project.company_name} 
                                            cardProjectDesc={project.description} 
                                            cardCompDesc={project.company_description}
                                            cardField={project.field}
                                            /> ))}
                                    </Row>
                                </Carousel.Item>;
                if(items.length > 6) {
                    carouselRow3 = <Carousel.Item interval={1500} key={this.props.key}>
                                    <Row style={RowStyle}>
                                        {items.slice(6,9).map((project) => (
                                            <ProjectComponent key={project.id}
                                            cardTitle={project.company_name} 
                                            cardProjectDesc={project.description} 
                                            cardCompDesc={project.company_description}
                                            cardField={project.field}
                                            /> ))}
                                    </Row>
                                </Carousel.Item>;
                }
            }
            return (<div className="Carousel" style={this.state}>
            <Carousel className={classes.Carousel}>
                {carouselRow1}
                {carouselRow2}
                {carouselRow3}
            </Carousel>
        </div>)
        }  
    }
}

export default ProjectCarouselComponent;