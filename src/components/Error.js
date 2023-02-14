import { Url_Not_Found } from "../utils/constant"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Error = () => {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col style={{ textAlign: "center" }}>
                    <img
                        style={{ marginTop: "120px" }}
                        height={260}
                        src={Url_Not_Found} />

                    <h2>Page not found</h2>

                    <h6 className='normal-text small-text'>Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</h6>

                    <LinkContainer to="/">
                        <Button variant="primary" className="btnGoHome">
                            Go Home
                        </Button>
                    </LinkContainer>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}

export default Error