import { IMG_CDN_URL } from '../constant';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, costForTwoString, avgRating }) => {
    return (
        <>
            <Card style={{ width: '19rem' }} className='wrapper'>
                <Card.Img variant="top" src={IMG_CDN_URL + cloudinaryImageId} />
                <Card.Body>
                    <Card.Title className='restaurant-name'>{name}</Card.Title>
                    <Card.Text className='notmal-text small-text'>{cuisines.join(", ")}</Card.Text>
                    <Row>
                        <Col>
                            {
                                parseFloat(avgRating) >= 4 ?
                                    <div className='star-bg-positive' style={{ width: '40px' }}>
                                        <i className="star"></i>
                                        <span>{avgRating}</span>
                                    </div>
                                    :
                                    <div className='star-bg-negative' style={{ width: '40px' }}>
                                        <i className="star"></i>
                                        <span>{avgRating}</span>
                                    </div>}
                        </Col>
                        <Col>
                            <Card.Text className='notmal-text small-text'>{lastMileTravelString}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className='notmal-text small-text'>{costForTwoString}</Card.Text>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}

export default RestaurantCard;