import React, {Component} from 'react';
import axios from 'axios';

import JuniorsComponent from './JuniorsComponent';
import FilterComponent from '../FilterComponent';
import './JuniorsComponent.css';
import '../AllHomePage.css';
import {field_array} from '../data';
import emptyState from '../images/empty_state.png';

class AllJuniors extends Component {
    constructor(props) {    
        super(props)
        this.state = {
            background: "lightskyblue",
            allJuniorsArray: [],
            items: localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[],
            juniorFieldFilter: localStorage.getItem('juniorFieldFilter')?JSON.parse(localStorage.getItem('juniorFieldFilter')):[]
        }
    }

    componentDidMount() {
        axios.get('/api/home/juniors')
            .then(response => this.setState({ allJuniorsArray : response.data }))
    }

    juniorFilterFieldOnChange = selected => {
        let newjuniorFieldFilter = [];
        let newItems = [];
        if(selected === null || selected.length === 0) {
            newItems = this.state.allJuniorsArray ; 
        }
        else {
            let valuesArrObj = selected.reduce((acc, current) => acc.concat(current.value), []);
            let filterArrayByField = this.state.items.filter(junior => junior.field.some(r => valuesArrObj.includes(r)));
            newjuniorFieldFilter = selected ;
            newItems = filterArrayByField;
        }
        this.setState({juniorFieldFilter:newjuniorFieldFilter,
                        items:newItems},
        () => {
            localStorage.setItem('juniorFieldFilter', JSON.stringify(newjuniorFieldFilter));
            localStorage.setItem('items', JSON.stringify(newItems));
        })
    }

    render() {
        const pageBody = (this.state.items.length === 0) ? 
                        <div className="emptyState">
                            <img src={emptyState} alt=""/>
                        </div> :
                        <JuniorsComponent juniors = {this.state.items}/> ; 
        return (
            <div className="AllJuniors">
                <h1 className="ListHeader">כל המתמחים</h1>
                <div className="container">
                    <div className="row justify-content-center" style={{margin: '30px'}}>
                        <div className="col-4 text-center" style={{marginRight: '30px'}}>
                            <FilterComponent
                                place_holder = "סנן לפי תחום"
                                filter_array = {field_array}
                                handle_on_change = {this.juniorFilterFieldOnChange}
                                filter_value = {this.state.juniorFieldFilter} 
                            />
                        </div>
                </div>
                {pageBody}
            </div>
        </div>
        )
    }
}
export default AllJuniors;