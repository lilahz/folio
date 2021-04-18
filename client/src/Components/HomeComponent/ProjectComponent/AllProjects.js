import React, {Component} from 'react';
import axios from 'axios';

import ProjectsComponent from './ProjectsComponent';
import FilterComponent from '../FilterComponent';
import {field_array} from '../data';
import {status_array} from '../data';
import './ProjectsComponent.css';
import '../AllHomePage.css';
import classes from './AllProjects.module.css';
import emptyState from '../images/empty_state.png';


class AllProjects extends Component {
    constructor(props) {    
        super(props)
        this.state = {
            background: "lightskyblue",
            allProjectsArray: [],
            currProjectsArray: localStorage.getItem('currProjectsArray')?JSON.parse(localStorage.getItem('currProjectsArray')):null,
            projectsStatusFilter: localStorage.getItem('projectsStatusFilter')?JSON.parse(localStorage.getItem('projectsStatusFilter')):null,
            projectsFieldFilter: localStorage.getItem('projectsFieldFilter')?JSON.parse(localStorage.getItem('projectsFieldFilter')):null
        }
    }

    componentDidMount() {
        axios.get("/api/home/projects")
            .then(response => this.setState({allProjectsArray: response.data}))
    }


    projectFilterStatusOnChange = selected => {
        let newProjectsStatusFilter = [];
        let newcurrProjectsArray = [];
        if(selected === null || selected.length === 0) {
            // if(this.state.fieldFilter === null || this.state.fieldFilter.length === 0) 
            //     newcurrProjectsArray = this.state.allProjectsArray ;
            // else
            //     newcurrProjectsArray = this.state.currProjectsArray ;
            newcurrProjectsArray = this.state.allProjectsArray ; 
            this.setState({projectsFieldFilter: null})
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            let filterArrayByStatus = [];
            if(this.state.projectsFieldFilter === null || this.state.projectsFieldFilter.length === 0) {
                filterArrayByStatus = this.state.allProjectsArray.filter(project => valuesArrObj.includes(project.status)); }
            else {
                filterArrayByStatus = this.state.currProjectsArray.filter(project => valuesArrObj.includes(project.status)); }
            
            newProjectsStatusFilter = selected ;
            newcurrProjectsArray = filterArrayByStatus;
        }
        this.setState({projectsStatusFilter:newProjectsStatusFilter,
                       currProjectsArray:newcurrProjectsArray},
        () => {
            localStorage.setItem('projectsStatusFilter', JSON.stringify(newProjectsStatusFilter));
            localStorage.setItem('currProjectsArray', JSON.stringify(newcurrProjectsArray));
        })
    }

    projectFilterFieldOnChange = selected => {
        let newProjectsFieldFilter = [];
        let newcurrProjectsArray = [];
        if(selected === null || selected.length === 0) {
            // if(this.state.statusFilter === null || this.state.statusFilter.length === 0) 
            //     newcurrProjectsArray = this.state.allProjectsArray ; 
            // else
            //     newcurrProjectsArray = this.state.currProjectsArray ;
            newcurrProjectsArray = this.state.allProjectsArray ; 
            this.setState({projectsStatusFilter: null})
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            let filterArrayByField = [];
            if(this.state.projectsStatusFilter === null || this.state.projectsStatusFilter.length === 0) {
                filterArrayByField = this.state.allProjectsArray.filter(project => project.field.some(r => valuesArrObj.includes(r))); }
            else {
                filterArrayByField = this.state.currProjectsArray.filter(project => project.field.some(r => valuesArrObj.includes(r))); }
            newProjectsFieldFilter = selected ;
            newcurrProjectsArray = filterArrayByField;
        }
        this.setState({projectsFieldFilter:newProjectsFieldFilter,
                        currProjectsArray:newcurrProjectsArray},
        () => {
            localStorage.setItem('projectsFieldFilter', JSON.stringify(newProjectsFieldFilter));
            localStorage.setItem('currProjectsArray', JSON.stringify(newcurrProjectsArray));
        })
    }

    render() {
        const pageBody = (this.state.currProjectsArray === null) ? 
                        <div className="emptyState">
                            <img src={emptyState} alt=""/>
                        </div> :
                        // (this.state.projectsStatusFilter === null && this.state.projectsFieldFilter === null) ?
                        // <ProjectsComponent projects = {this.state.allProjectsArray}/> : 
                        <ProjectsComponent projects = {this.state.currProjectsArray}/> ; 
        return (
            <div className={classes.AllProjects}>
                <h1 className="ListHeader">כל הפרוייקטים </h1>
                <div className="container">
                    <div className={classes.Filters} >
                        <div className="col-4 text-center " style={{margin : 'auto 30px'}}>
                            <FilterComponent
                                className={classes.Filter}
                                place_holder = "סנן לפי תחום"
                                filter_array = {field_array}
                                handle_on_change = {this.projectFilterFieldOnChange}
                                filter_value = {this.state.projectsFieldFilter}
                            />
                        </div>
                        <div className="col-4 text-center" style={{margin: '30px'}}>
                            <FilterComponent
                                place_holder = "סנן לפי סטטוס"
                                filter_array = {status_array}
                                handle_on_change = {this.projectFilterStatusOnChange}
                                filter_value = {this.state.projectsStatusFilter} 
                            />
                        </div>
                    </div>
                {pageBody}
            </div>
        </div>
        )
    }
}
export default AllProjects;