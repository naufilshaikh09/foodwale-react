import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Text style={{ margin: "auto" }}>
                    Created by <a target='_blank' href="https://github.com/naufilshaikh09/react-getting-started">Naufil Shaikh</a> @2023
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer;