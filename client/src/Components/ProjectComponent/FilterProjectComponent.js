import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


const customStyles = {
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


export default function FilterProjectComponent({place_holder, filter_array, handle_on_change, filter_value}) {
    return (
        <div>
            <div className="select_filter">
            <Select
                value={filter_value}  onChange={handle_on_change} options={filter_array}
                className="mt-4 col-md-8 col-offset-4 col-sm-4"
                placeholder={place_holder}
                isSearchable
                maxMenuHeight={170}
                hideSelectedOptions={false}
                styles={customStyles}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                autoFocus
            />
            </div>
        </div>

    )
}
// class FilterProjectByStatusComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             options : props.options,
//             placeholder : props.filterName,
//             selectedOptions: [],
//             allProjects: []
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }


//     customStyles = {
//         option: (provided, state) => ({
//         ...provided,
//         borderBottom: '1px dotted blue',
//         padding: 10,
//         width: 350,
//         fontSize: 15
//         }),
//         control: styles => ({
//             ...styles, backgroundColor: 'white', width: 350 }),
//         singleValue: (provided, state) => {
//         const opacity = state.isDisabled ? 0.5 : 1;
//         const transition = 'opacity 300ms';
//         return { ...provided, opacity, transition };
//         },
//         menu: styles => ({
//             ...styles,
//             width: 350,
//             backgroundColor: 'white'
//         }),
//     }

//     handleChange (e) {
//         this.setState( {selectedOptions : e});
//     }

//     RowStyle = {
//         marginLeft: "5%",
//         marginRight: "5%",
//     }

//     noFilerProjectArray () {
//         <Row style={this.RowStyle}>
//             {this.state.allProjects.map(filteredProject => (
//                     <ProjectComponent className="col-sm-4"
//                     cardTitle={filteredProject.company_name} 
//                     cardText={filteredProject.description} 
//                     cardLink="#"/>))}
//             </Row>
//     }

//     filerProjectArray (selected) {
//         <Row style={this.RowStyle}>
//             {this.state.allProjects.filter(project => 
//                 selected.value === project.status).map(filteredProject => (
//                     <ProjectComponent className="col-sm-4"
//                     cardTitle={filteredProject.company_name} 
//                     cardText={filteredProject.description} 
//                     cardLink="#"/>))}
//             </Row>
//     }


//     render() {
//         return (<div>
//             <Select 
//                 className="mt-4 col-md-8 col-offset-4 col-sm-4"
//                 placeholder={this.state.placeholder}
//                 isSearchable
//                 maxMenuHeight={170}
//                 hideSelectedOptions={false}
//                 styles={this.customStyles}
//                 closeMenuOnSelect={false}
//                 components={makeAnimated()}
//                 isMulti
//                 autoFocus
//                 options={this.state.options}
//                 onChange={this.handleChange}
//             />
//             {
//                 this.state.selectedOptions === null ? this.noFilerProjectArray : this.filerProjectArray(this.state.selectedOptions)

//                 // this.state.selectedOptions.map(v => <h4>{v.label}</h4>)
//             }
//             </div>
//         )
//     }
// }

// export default FilterProjectByStatusComponent;
