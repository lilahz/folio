import React, { useContext } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import './NavBarComponent.css';
import { UserContext } from '../../UserContext';


const NavBarComponent = () => {
    const user = useContext(UserContext);

    const noUserLoggedIn = <Nav className="mr-auto">
                                <Nav.Link className="mr-auto" href="/register">הירשם</Nav.Link>
                                <Nav.Link className="ml-auto" href="/login">התחבר</Nav.Link>
                                {/* <Nav.Item className="mr-auto" onClick={handeLogout}>התנתק</Nav.Item> */}
                            </Nav>;
    const userLoggedIn = <Nav className="mr-auto">
                            <Nav.Link className="mr-auto" href="/logout">התנתק</Nav.Link>
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
                {user.mail !== '' ? userLoggedIn : noUserLoggedIn}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;