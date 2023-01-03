import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import logo from './images/logo.png';

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

// function HeaderComponent() {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Container>
//                 <Navbar.Brand><img src={logo} width={50} height={50} /></Navbar.Brand>
//                 <Navbar.Brand><input type={'text'} className='setwidth' placeholder='Search here...'></input></Navbar.Brand>
//                 <Navbar.Brand><FaUserAlt /></Navbar.Brand>
//             </Container>
//         </Navbar>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);