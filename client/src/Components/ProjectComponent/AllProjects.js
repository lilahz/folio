import React, {Component} from 'react';
import ProjectsComponent from './ProjectsComponent';
import FilterProjectComponent from './FilterProjectComponent';
import './ProjectComponent.css';
import './ProjectsComponent.css';
import emptyState from './images/empty_state.png';

class AllProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: "lightskyblue",
            allItems: [],
            items: localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[],
            statusFilter: localStorage.getItem('filter_status')?JSON.parse(localStorage.getItem('filter_status')):[],
            fieldFilter: localStorage.getItem('filter_field')?JSON.parse(localStorage.getItem('filter_field')):[]
        }
    }

    componentDidMount() {
        fetch("/home/projects")
          .then(response => response.json())
          .then(projects => this.setState({ allItems : projects }))
    }


    filter_status_on_change = selected => {
        let newStatusFilter = [];
        let newItems = [];
        if(selected === null || selected.length === 0) {
            // if(this.state.fieldFilter === null || this.state.fieldFilter.length === 0) 
            //     newItems = this.state.allItems ;
            // else
            //     newItems = this.state.items ;
            newItems = this.state.allItems ; 
            this.setState({fieldFilter: null})
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            let filter_array_by_status = this.state.items.filter(project => valuesArrObj.includes(project.status));
            if(this.state.fieldFilter === null || this.state.fieldFilter.length === 0) {
                filter_array_by_status = this.state.allItems.filter(project => valuesArrObj.includes(project.status));
            }
            newStatusFilter = selected ;
            newItems = filter_array_by_status;
        }
        this.setState({statusFilter:newStatusFilter,
                       items:newItems},
        () => {
            localStorage.setItem('filter_status', JSON.stringify(newStatusFilter));
            localStorage.setItem('items', JSON.stringify(newItems));
        })
    }

    filter_field_on_change = selected => {
        let newFieldFilter = [];
        let newItems = [];
        if(selected === null || selected.length === 0) {
            // if(this.state.statusFilter === null || this.state.statusFilter.length === 0) 
            //     newItems = this.state.allItems ; 
            // else
            //     newItems = this.state.items ;
            newItems = this.state.allItems ; 
            this.setState({statusFilter: null})
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            let filter_array_by_field = this.state.items.filter(project => project.field.some(r => valuesArrObj.includes(r)));
            if(this.state.statusFilter === null || this.state.statusFilter.length === 0) {
                filter_array_by_field = this.state.allItems.filter(project => project.field.some(r => valuesArrObj.includes(r)));
            }
            newFieldFilter = selected ;
            newItems = filter_array_by_field;
        }
        this.setState({fieldFilter:newFieldFilter,
                        items:newItems},
        () => {
            localStorage.setItem('filter_field', JSON.stringify(newFieldFilter));
            localStorage.setItem('items', JSON.stringify(newItems));
        })
    }


    field_array = [{ value: 'marketing', label: 'Marketing' },
                    { value: 'appdev', label: 'App Development' },
                    { value: 'webdev', label: 'Web Development' },
                    { value: 'logodesign', label: 'Logo Design' },
                    { value: 'webdesign', label: 'Web Design' },
                    { value: 'logodesign', label: 'Logo Design' },
                    { value: 'finance', label: 'Financial Aid' },
                    { value: 'legal', label: 'Legal Aid' },
                    { value: 'sales', label: 'Sales' }]

    status_array = [{value: 'todo', label: 'To Do'},
                    {value: 'inprogress', label: 'In Progress'},
                    {value: 'done', label: 'Done'}]


    render() {
        const pageBody = (this.state.items.length === 0) ? 
                        <div className="emptyState">
                            <img src={emptyState} alt=""/>
                         </div>
                      : <ProjectsComponent projects = {this.state.items}/> ; 
        return (
            <div className="AllProjects">
                <h1 className="ProjectListHeader">All of Our Projects</h1>
                <div className="container">
                    <div className="row justify-content-center" style={{margin: '30px'}}>
                        <div className="col-4 text-center" style={{marginRight: '30px'}}>
                            <FilterProjectComponent
                                place_holder = "Filter by Field"
                                filter_array = {this.field_array}
                                handle_on_change = {this.filter_field_on_change}
                                filter_value = {this.state.fieldFilter} 
                            />
                        </div>
                        <div className="col-4 text-center" style={{marginLeft: '30px'}}>
                            <FilterProjectComponent
                                place_holder = "Filter by Status"
                                filter_array = {this.status_array}
                                handle_on_change = {this.filter_status_on_change}
                                filter_value = {this.state.statusFilter} 
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