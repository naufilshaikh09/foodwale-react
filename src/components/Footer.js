import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Text
                    style={{ margin: "auto" }}>
                    @2023 FOODWALE : Created by Naufil Shaikh
                </Navbar.Text>

                <div style={{ fontSize: "30px" }}>
                    <span
                        style={{ marginRight: "10px" }}>
                        <a
                            style={{ color: "black" }}
                            target='_blank'
                            href="https://github.com/naufilshaikh09">
                            <FaGithub />
                        </a>
                    </span>

                    <span
                        style={{ marginRight: "10px" }}>
                        <a
                            style={{ color: "#0B65C2" }}
                            target='_blank'
                            href="https://www.linkedin.com/in/naufil09/">
                            <FaLinkedin />
                        </a>
                    </span>

                    <span
                        style={{ marginRight: "10px" }}>
                        <a
                            style={{ color: "#1C9BEF" }}
                            target='_blank'
                            href="https://twitter.com/naufilshaikh09">
                            <FaTwitter />
                        </a>
                    </span>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer;