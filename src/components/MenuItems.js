import { IMG_CDN_URL } from "../utils/constant"
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuItemAddRemoveButton from "./helper/MenuItemAddRemoveButton";

const MenuItems = ({ restaurantMenuDetails, cartItems, item, id, name, price, description, cloudinaryImageId }) => {
    return (
        <Card
            style={{ width: '19rem' }}
            key={id}
            className="restro">
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Title
                            className='restaurant-name'>{name}
                        </Card.Title>
                        <Card.Text
                            className='normal-text small-text'>
                            &#8377;{price / 100}
                        </Card.Text>
                        <Card.Text
                            className='normal-text small-text'>
                            {description}
                        </Card.Text>
                        <div className="item-add-remove-menu">
                            {/* <MinusButton item={item} /> */}
                            {/* <ValueButton cartItems={cartItems} id={item.id} /> */}
                            {/* <PlusButton item={item} /> */}
                            <MenuItemAddRemoveButton
                                cartItems={cartItems} item={item} id={id} />
                        </div>
                    </Card.Body>
                </Col>
                <Col style={{ margin: "auto" }}>
                    {
                        cloudinaryImageId
                            ?
                            <Card.Img
                                variant="top"
                                src={IMG_CDN_URL
                                    + cloudinaryImageId} />
                            :
                            <Card.Img
                                variant="top"
                                src={IMG_CDN_URL
                                    + restaurantMenuDetails.cloudinaryImageId} />
                    }
                </Col>
            </Row>
        </Card>
    )
}

export default MenuItems