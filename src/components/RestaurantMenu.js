import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RESTAURANT_MENU_API, IMG_CDN_URL, NO_CART_IMAGE_URL } from "../utils/constant"
import Shimmer from "./Shimmer";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { MdOutlineLocalOffer } from "react-icons/md";
import Widget from "./Widget";
import MenuItems from "./MenuItems";
import EmptyCart from "./EmptyMenuCart";
import MenuCart from "./MenuCart";

const RestaurantMenu = () => {
    let { restId } = useParams();
    const [restaurantMenuDetails, setRestaurantMenuDetails] = useState(null);
    const [widgetList, setwidgetList] = useState(null);

    const cartItems = useSelector((store) => store.cart.items);

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu() {
        try {
            let data = await fetch(RESTAURANT_MENU_API + restId);
            let fetchJson = await data.json();
            setRestaurantMenuDetails(fetchJson.data);
            setwidgetList(fetchJson.data.menu.widgets);
            // console.log(fetchJson.data);
            // console.log(fetchJson.data.menu.widgets)
        } catch (error) {
            console.log('There was an error while fetching restaurant menu ddata', error);
        }
    }

    return !restaurantMenuDetails
        ? (<Shimmer />)
        : (
            <>
                <Card
                    style={{ width: '19rem' }}
                    className="restroBanner">
                    <Row>
                        <Col
                            style={{ margin: "auto", textAlign: "right" }}>
                            <Card.Img
                                className="restroImage"
                                variant="top"
                                src={IMG_CDN_URL + restaurantMenuDetails?.cloudinaryImageId} />
                        </Col>
                        <Col style={{ margin: "auto" }}>
                            <Card.Body>
                                <Card.Title>
                                    {restaurantMenuDetails?.name}
                                </Card.Title>
                                <Card.Text
                                    className="small-text"
                                    style={{ color: "#a19a9a" }}>
                                    {restaurantMenuDetails?.cuisines?.join(", ")}
                                </Card.Text>
                                <Card.Text
                                    className="small-text"
                                    style={{ color: "#a19a9a" }}>
                                    {restaurantMenuDetails?.locality + ", " + restaurantMenuDetails?.area}
                                </Card.Text>
                                <Row>
                                    <Col style={{ borderRight: "1px solid white" }}>
                                        <Card.Subtitle>
                                            {restaurantMenuDetails?.avgRating}
                                        </Card.Subtitle>
                                        <Card.Text className='small-text'>
                                            {restaurantMenuDetails?.totalRatingsString}
                                        </Card.Text>
                                    </Col>
                                    <Col style={{ borderRight: "1px solid white" }}>
                                        <Card.Subtitle>
                                            {restaurantMenuDetails?.sla?.slaString}
                                        </Card.Subtitle>
                                        <Card.Text className='small-text'>
                                            Delivery Time
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Subtitle>
                                            &#8377;{restaurantMenuDetails?.costForTwo / 100}
                                        </Card.Subtitle>
                                        <Card.Text className='small-text'>
                                            Cost for two
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                        <Col style={{ margin: "auto" }}>
                            <div style={{ border: "1px solid white", width: "263px" }}>
                                {
                                    restaurantMenuDetails.aggregatedDiscountInfo.descriptionList.map((item, index) => {
                                        return <p key={index} style={{ margin: "20px" }}>
                                            <MdOutlineLocalOffer /> {item.meta}
                                        </p>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Card>

                <div style={{ margin: "10px", padding: "10px" }}>
                    <Row>
                        <Col style={{ textAlign: "right", listStyleType: "none", margin: "10px", padding: "10px", }}>
                            {
                                widgetList.map((e, index) => {
                                    return <Widget name={e.name} index={index} />
                                })
                            }
                        </Col>
                        <Col style={{ padding: "10px" }}>
                            <div className="restaurant-list">
                                <div className="restro">
                                    {
                                        Object.values(restaurantMenuDetails?.menu?.items).map((item) => {
                                            return <MenuItems
                                                restaurantMenuDetails={restaurantMenuDetails}
                                                cartItems={cartItems}
                                                item={item}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price}
                                                description={item.description}
                                                cloudinaryImageId={item.cloudinaryImageId}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col style={{ margin: "10px", padding: "10px", opacity: 1 }}>
                            {
                                !cartItems.length
                                    ?
                                    <EmptyCart NO_CART_IMAGE_URL={NO_CART_IMAGE_URL} />
                                    :
                                    <MenuCart
                                        cartItems={cartItems}
                                    />
                            }
                        </Col>
                    </Row>
                </div>
            </>
        )
}

export default RestaurantMenu