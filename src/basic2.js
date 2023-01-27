import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../src/assets/images/logo.png';
import Carousel from 'react-bootstrap/Carousel';

const LogoComponent = () => {
    return <Navbar.Brand><img src={logo} width={50} height={50} /></Navbar.Brand>
}

const SearchComponent = () => {
    return (
        <Navbar.Brand>
            <input type={'text'} className='setwidth' placeholder='Search here...'></input>
        </Navbar.Brand>
    )
}

const IconComponent = () => <Navbar.Brand><FaUserAlt /></Navbar.Brand>

const HeaderComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LogoComponent />
                <SearchComponent />
                <IconComponent />
            </Container>
        </Navbar>
    )
}

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo} width={500} height={500}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo} width={500} height={500}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo} width={500} height={500}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const Body = () => {
    return (
        <>
            <HeaderComponent />
            <Carousels />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body />);