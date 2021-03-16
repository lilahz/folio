import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import './NavBarComponent.css';


const NavBarComponent = () => {
    const handeLogout = () => {
        // axios.post('http://projects-21.herokuapp.com/api/auth/company_logout')
        // .then(response => {
        //     console.log("respone" + response);
        //     console.log("respone data" + response.data);
        // })
        // .catch(error => {
        //     console.log(error.response.status); 
        // })
        console.log(localStorage.getItem('currentUserCompanyEmail'));
        localStorage.removeItem('currentUserCompanyEmail');
    }
    const noUserLoggedIn = <Nav className="mr-auto">
                                <Nav.Link href="/register">REGISTER</Nav.Link>
                                <Nav.Link href="/login">LOGIN</Nav.Link>
                            </Nav>;

    const userLoggedIn = <Nav className="mr-auto">
                            <Nav.Item onClick={handeLogout}>LOGOUT</Nav.Item>
                         </Nav>;
    return (
        <Navbar className="NavBar" variant="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/home/projects">PROJECTS</Nav.Link>
                    <Nav.Link href="/home/juniors">JUNIORS</Nav.Link>
                    <Nav.Link href="/home/about" className="ml-auto" style={{alignSelf: "right"}}>ABOUT</Nav.Link>
                </Nav>
                <Form inline>
                   {localStorage.getItem('currentUserCompanyEmail') ? userLoggedIn : noUserLoggedIn}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;