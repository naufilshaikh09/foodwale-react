import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RESTAURANT_MENU_API } from "../constant"
import Shimmer from "./Shimmer";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IMG_CDN_URL } from '../constant';

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
            console.log(fetchJson.data);
        } catch (error) {
            console.log('There was an error while fetching restaurant menu ddata', error);
        }
    }
    return !restaurantMenuDetails
        ? (<Shimmer />
        ) : (
            <div className="restaurant-list">
                {/* <div>
                    <h1>{restaurantMenuDetails?.id}</h1>
                    <h1>{restaurantMenuDetails?.area}</h1>
                    <h1>{restaurantMenuDetails?.name}</h1>
                    <h1>{restaurantMenuDetails?.costForTwoMsg}</h1>
                    <h1>{restaurantMenuDetails?.avgRating}</h1>
                </div> */}
                <div className="restro">
                    {Object.values(restaurantMenuDetails?.menu?.items).map((item) => {
                        return (
                            <Card style={{ width: '19rem' }} key={item.id} className="restro">
                                <Row>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>{item.defaultPrice / 100} Rs</Card.Text>
                                            <Card.Text style={{ color: "#a19a9a" }}>{item.description}</Card.Text>
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
        )
}

export default RestaurantMenu