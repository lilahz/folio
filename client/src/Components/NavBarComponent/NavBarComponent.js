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
                                <Nav.Link className="mr-auto" href="/register">הירשם</Nav.Link>
                                <Nav.Link className="ml-auto" href="/login">התחבר</Nav.Link>
                            </Nav>;
    const userLoggedIn = <Nav className="mr-auto">
                            <Nav.Item className="mr-auto" onClick={handeLogout}>התנתק</Nav.Item>
                          </Nav>;
    return (
        <Navbar className="NavBar" variant="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">דף הבית</Nav.Link>
                    <Nav.Link href="/home/projects">פרוייקטים</Nav.Link>
                    <Nav.Link href="/home/juniors">מתמחים</Nav.Link>
                    <Nav.Link href="/home/about" style={{alignSelf: "right"}}>עלינו</Nav.Link>
                </Nav>
                {localStorage.getItem('currentUserCompanyEmail') ? userLoggedIn : noUserLoggedIn}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;