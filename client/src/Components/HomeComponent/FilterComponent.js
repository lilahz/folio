import React from 'react'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated';

import classes from './FilterComponent.module.css';

const { Option } = components;

const IconOption = (props) => (
    <Option {...props}>
        {props.data.icon}
        {props.data.label}
    </Option>
);


const customStyles = {
    option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted blue',
    padding: 10,
    fontSize: 15
    }),
    control: styles => ({
        ...styles, backgroundColor: 'white', width: 400, margin: '15px' }),
    singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
    },
    menu: styles => ({
        ...styles,
        width: 400,
        backgroundColor: 'white'
    }),
}

export default function FilterComponent({place_holder, filter_array, handle_on_change, filter_value}) { 
    return (
        <div>
            <div className={classes.FiltersDiv}>
                <Select
                    value={filter_value} onChange={handle_on_change} options={filter_array}
                    className={"mt-4 col-md-8 col-offset-4 col-sm-4 " + classes.Filter}
                    placeholder={place_holder}
                    isSearchable
                    maxMenuHeight={170}
                    hideSelectedOptions={false}
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    components={makeAnimated(), {Option: IconOption}}
                    isMulti
                    autoFocus
                />
            </div>
        </div>

    )
}