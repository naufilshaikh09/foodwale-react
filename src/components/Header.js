import { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'
import { LinkContainer } from "react-router-bootstrap";
import useLocalStorage from "../utils/useLocalStorage";
import SignIn from "./SignIn";
import Offcanvas from 'react-bootstrap/Offcanvas';
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

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
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUserLoggedIn, getSetLocalStorage] = useLocalStorage("isLoggedIn", "false");
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { user, setUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

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
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            {
                                cartItems.length > 0
                                    ? <Nav.Link>Cart({cartItems.length})</Nav.Link>
                                    : <Nav.Link>Cart</Nav.Link>
                            }
                        </LinkContainer>
                        {
                            isUserLoggedIn == "true"
                                ? <Nav.Link
                                    onClick={
                                        () => {
                                            setUser({
                                                email: ""
                                            });
                                            getSetLocalStorage("isLoggedIn", "false");
                                        }
                                    }>Logout ({user?.email})
                                </Nav.Link>
                                : <Nav.Link
                                    onClick={
                                        () => {
                                            handleShow();
                                        }
                                    }>Login
                                </Nav.Link>
                        }
                        {/* {
                            isLoggedIn
                                ? <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
                                : <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>
                        } */}

                        <Offcanvas
                            show={show}
                            onHide={handleClose}
                            placement={"end"}>
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <SignIn
                                    handleClose={handleClose}
                                    getSetLocalStorage={getSetLocalStorage} />
                            </Offcanvas.Body>
                        </Offcanvas>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;