import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const FoodItem = ({ cartItems }) => {
    return (
        <div
        // style={{ width: '19rem' }}
        // className='wrapper'
        >
            {/* <Card.Img
                variant="top"
                src={IMG_CDN_URL + cloudinaryImageId} /> */}

            <Card.Body>
                {
                    cartItems.map((e) => {
                        return (<Row>
                            <Col>
                                <Card.Title
                                    className='restaurant-name'>
                                    {e.name}
                                </Card.Title>
                            </Col>
                            <Col>
                                <Button>-</Button>
                                <spa>1</spa>
                                <Button>+</Button>
                            </Col>
                            <Col>
                                <Card.Subtitle
                                    className='normal-text small-text'>
                                    &#8377;{e.price / 100}
                                </Card.Subtitle>
                            </Col>
                        </Row>)
                    })
                }
            </Card.Body>

        </div>
    )
}

export default FoodItem;

// src={IMG_CDN_URL + cloudinaryImageId}