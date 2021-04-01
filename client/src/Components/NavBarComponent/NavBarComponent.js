import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

import './NavBarComponent.css';

const NavBarComponent = () => {
    return (
        <Navbar className="NavBar" variant="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <Form inline> */}
                    <Nav className="justify-content-end">
                        <Nav.Link href="/register">הירשם</Nav.Link>
                        <Nav.Link href="/login">התחבר</Nav.Link>
                    </Nav>
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