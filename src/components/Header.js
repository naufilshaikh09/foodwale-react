import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'

const Title = () => {
    return (
        <a href='/'>
            <img
                className='logo'
                alt='logo'
                // src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-food-logo-png-image_4743675.png'
                src={logo}
            />
        </a>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        // <div className='header'>
        //     <Title />
        //     <div className='nav-items'>
        //         <ul>
        //             <li>Home</li>
        //             <li>About</li>
        //             <li>Contact</li>
        //             <li>Cart</li>
        //         </ul>
        //     </div>
        //     <div>
        //         {
        //             isLoggedIn
        //                 ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        //                 : <button onClick={() => setIsLoggedIn(true)}>Login</button>
        //         }
        //     </div>
        // </div>

        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <Title />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
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