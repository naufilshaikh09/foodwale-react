import { IMG_CDN_URL } from '../constant';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, costForTwoString }) => {
    return (
        <>
            <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src={IMG_CDN_URL + cloudinaryImageId} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{ color: "#a19a9a" }}>{cuisines.join(", ")}</Card.Text>
                    <Row>
                        <Col>
                            <Card.Text>{lastMileTravelString}</Card.Text></Col>
                        <Col>
                            <Card.Text>{costForTwoString}</Card.Text></Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}

export default RestaurantCard;