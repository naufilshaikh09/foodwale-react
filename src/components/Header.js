import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import { LinkContainer } from "react-router-bootstrap";

const Title = () => {
    return (
        <img
            className='logo'
            alt='logo'
            src={logo}
        />
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Navbar bg="light" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Title />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                        <LinkContainer to="/cart"><Nav.Link>Cart</Nav.Link></LinkContainer>
                        {
                            isLoggedIn
                                ? <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
                                : <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;