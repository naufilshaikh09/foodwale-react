import { IMG_CDN_URL } from '../utils/constant';
import Card from 'react-bootstrap/Card';

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
    return (
        <Card
            style={{ width: '19rem' }}
            className='wrapper'>
            <Card.Img
                variant="top"
                src={IMG_CDN_URL + cloudinaryImageId} />
            <Card.Body>
                <Card.Title
                    className='restaurant-name'>
                    {name}
                </Card.Title>
                <Card.Text
                    className='normal-text small-text'>
                    {description}
                </Card.Text>
                <Card.Text
                    className='normal-text small-text'>
                    {price / 100} Rs
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FoodItem;