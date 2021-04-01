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
                                <Nav.Link href="/register">הירשם</Nav.Link>
                                <Nav.Link href="/login">התחבר</Nav.Link>
                            </Nav>;

    const userLoggedIn = <Nav className="mr-auto">
                            <Nav.Item onClick={handeLogout}>התנתק</Nav.Item>
                         </Nav>;
    return (
        <Navbar className="NavBar" variant="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav className="justify-content-end">
                        {localStorage.getItem('currentUserCompanyEmail') ? userLoggedIn : noUserLoggedIn}
                    </Nav>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="/home/about" className="ml-auto" style={{alignSelf: "right"}}>עלינו</Nav.Link>
                    <Nav.Link href="/home/juniors">מתמחים</Nav.Link>
                    <Nav.Link href="/home/projects">פרוייקטים</Nav.Link>
                    <Nav.Link href="/">דף הבית</Nav.Link>
                </Nav>
                {/* </Form> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;