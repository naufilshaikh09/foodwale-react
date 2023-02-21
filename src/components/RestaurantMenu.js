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
import MenuBanner from "./MenuBanner";

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

    // if (!restaurantMenuDetails) return null;

    return !restaurantMenuDetails
        ? (<Shimmer />)
        : (
            <>

                <div style={{ margin: "1px", padding: "1px" }}>
                    <MenuBanner {...restaurantMenuDetails} />
                </div>

                <div style={{ margin: "10px", padding: "10px" }}>
                    <Row>
                        <Col style={{ textAlign: "right", listStyleType: "none", margin: "10px", padding: "10px", }}>
                            {
                                widgetList.map((e, index) => {
                                    return <Widget name={e.name} key={index} />
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
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price > 0 ? item.price : item.defaultPrice}
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