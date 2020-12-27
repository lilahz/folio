import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import axios from 'axios'

// import './FilterProjectComponent.css';

class FilterProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions : props.options,
            placeholder : props.filterName,
            value: []
        }
    }

    animatedComponents = makeAnimated();

    customStyles = {
        option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted blue',
        padding: 10,
        width: 350,
        fontSize: 15
        }),
        control: styles => ({
            ...styles, backgroundColor: 'white', width: 350 }),
        singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
        },
        menu: styles => ({
            ...styles,
            width: 350,
            backgroundColor: 'white'
        }),
    }

    handleChange (e) {
        this.setState({value:e})
    }

    axios = require('axios');
    async updateData() {
        params = {
            filter_array: this.state.value
          }
    
        let res = await axios.post('/home/projects', params);
        console.log(res.data);
    }
    // updateData () {
    //     async function updatePost() {
    //         const requestOptions = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ filter_array: this.state.value })
    //         };
    //         const response = await fetch('/home/projects', requestOptions);
    //         const data = await response.json();
    //     }
    // }

    
    render() {
        console.log(this.state.selectOptions)
        return (<div><Select className="mt-4 col-md-8 col-offset-4 col-sm-4"
            maxMenuHeight={170}
            hideSelectedOptions={false}
            styles={this.customStyles}
            closeMenuOnSelect={false}
            components={this.animatedComponents}
            isMulti
            options={this.state.selectOptions}
            placeholder={this.state.placeholder}
            onChange={this.handleChange.bind(this)}
            />
            {
                this.state.value === null ? "" :
                this.updateData()
            }
            </div>
        )
    }
}

export default FilterProjectComponent;
