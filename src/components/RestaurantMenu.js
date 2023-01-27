import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RESTAURANT_MENU_API, IMG_CDN_URL } from "../utils/constant"
import Shimmer from "./Shimmer";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantMenu = () => {
    let { restId } = useParams();
    const [restaurantMenuDetails, setRestaurantMenuDetails] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu() {
        try {
            let data = await fetch(RESTAURANT_MENU_API + restId);
            let fetchJson = await data.json();
            setRestaurantMenuDetails(fetchJson.data);
            // console.log(fetchJson.data);
        } catch (error) {
            console.log('There was an error while fetching restaurant menu ddata', error);
        }
    }
    return !restaurantMenuDetails
        ? (<Shimmer />
        ) : (
            <>
                <Card style={{ width: '19rem' }} className="restroBanner">
                    <Row>
                        <Col style={{ margin: "auto", textAlign: "right" }}>
                            <Card.Img
                                className="restroImage"
                                variant="top"
                                src={IMG_CDN_URL + restaurantMenuDetails?.cloudinaryImageId} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{restaurantMenuDetails?.name}</Card.Title>
                                <Card.Text style={{ color: "#a19a9a" }}>{restaurantMenuDetails?.cuisines?.join(",")}</Card.Text>
                                <Card.Text style={{ color: "#a19a9a" }}>{restaurantMenuDetails?.area}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                <div className="restaurant-list">
                    <div className="restro">
                        {Object.values(restaurantMenuDetails?.menu?.items).map((item) => {
                            return (
                                <Card style={{ width: '19rem' }} key={item.id} className="restro">
                                    <Row>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title className='restaurant-name'>{item.name}</Card.Title>
                                                <Card.Text className='notmal-text small-text'>{item.price / 100} Rs</Card.Text>
                                                <Card.Text className='notmal-text small-text'>{item.description}</Card.Text>
                                            </Card.Body>
                                        </Col>
                                        <Col style={{ margin: "auto" }}>
                                            <Card.Img variant="top" src={IMG_CDN_URL + item.cloudinaryImageId} />
                                        </Col>
                                    </Row>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </>
        )
}

export default RestaurantMenu