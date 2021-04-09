import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import './NavBarComponent.css';


const NavBarComponent = () => {
    console.log(localStorage.getItem('currentUserEmail'));

    const handeLogout = () => {
        const type = localStorage.getItem('currentUserType');
        const url = type === 'junior' ? '/api/auth/junior_logout' : '/api/auth/company_logout';
        axios.post(url)
        .then(response => {
            console.log("respone", response);
            console.log("respone data", response.data);
        })
        .catch(error => {
            console.log("response error " , error.response.data); 
            console.log("response error status " , error.response.status); 
        })
        console.log(localStorage.getItem('currentUserEmail'));
        localStorage.removeItem('currentUserEmail');
    }
    const noUserLoggedIn = <Nav className="mr-auto">
                                {console.log("user not logged in yet", localStorage.getItem('currentUserEmail'))}
                                <Nav.Link className="mr-auto" href="/register">הירשם</Nav.Link>
                                <Nav.Link className="ml-auto" href="/login">התחבר</Nav.Link>
                                {/* <Nav.Item className="mr-auto" onClick={handeLogout}>התנתק</Nav.Item> */}
                            </Nav>;
    const userLoggedIn = <Nav className="mr-auto">
                            {console.log("user is logged in", localStorage.getItem('currentUserEmail'))}
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
                {localStorage.getItem('currentUserEmail') ? userLoggedIn : noUserLoggedIn}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;