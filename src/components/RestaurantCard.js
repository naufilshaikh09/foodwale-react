import { IMG_CDN_URL } from '../constant';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <>
            <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src={IMG_CDN_URL + cloudinaryImageId} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{cuisines.join(", ")}</Card.Text>
                    <Card.Text>{lastMileTravelString} minutes</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default RestaurantCard;