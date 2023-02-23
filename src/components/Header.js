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
import { MdLocalOffer, MdOutlineHelp, MdPeopleAlt, MdShoppingCart } from "react-icons/md";

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
        <Navbar bg="light" expand="md" sticky="top" style={{ boxShadow: "0 2px 14px #888484" }}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Title />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to="/offer">
                            <Nav.Link className="header-name"><MdLocalOffer className="header-icon" /> Offer</Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to="/help">
                            <Nav.Link className="header-name"><MdOutlineHelp className="header-icon" />Help</Nav.Link>
                        </LinkContainer> */}
                        {
                            isUserLoggedIn == "true"
                                ? <Nav.Link className="header-name"
                                    onClick={
                                        () => {
                                            setUser({
                                                email: ""
                                            });
                                            getSetLocalStorage("isLoggedIn", "false");
                                        }
                                    }> <MdPeopleAlt className="header-icon" /> Logout ({user?.email})
                                </Nav.Link>
                                : <Nav.Link className="header-name"
                                    onClick={
                                        () => {
                                            handleShow();
                                        }
                                    }> <MdPeopleAlt className="header-icon" /> Login
                                </Nav.Link>
                        }
                        {/* {
                            isLoggedIn
                                ? <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
                                : <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>
                        } */}
                        <LinkContainer to="/cart">
                            {
                                cartItems.length > 0
                                    ? <Nav.Link className="header-name" ><MdShoppingCart className="header-icon" />Cart({cartItems.length})</Nav.Link>
                                    : <Nav.Link className="header-name" > <MdShoppingCart className="header-icon" />Cart</Nav.Link>
                            }
                        </LinkContainer>

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