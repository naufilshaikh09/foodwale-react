import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { RESTAURANT_API } from '../utils/constant'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousels from './Carousels'

function filterData(searchText, restaurants) {
    return restaurants.filter((x) => {
        return x?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    });
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [carousels, setCarousels] = useState("");

    useEffect(() => {
        getRestaurantList();
    }, [])

    async function getRestaurantList() {
        try {
            let data = await fetch(RESTAURANT_API);

            let fetchJson = await data.json();

            setAllRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
            // console.log(fetchJson?.data?.cards[2]?.data?.data?.cards);

            setCarousels(fetchJson.data.cards[0].data.data.cards);
            // console.log(fetchJson.data.cards[0].data.data.cards);
        } catch (error) {
            console.log('There was an error while fetching restaurant ddata', error);
        }
    }

    return (allRestaurants?.length === 0)
        ? <Shimmer />
        : (
            <>
                <div className='carousels-list d-flex justify-content-center'>
                    {
                        carousels.length === 0 ? "No data found" :
                            carousels.map((carousel) => {
                                return (
                                    <Carousels
                                        {...carousel.data}
                                        key={carousel.data.bannerId}
                                    />
                                )
                            })
                    }
                </div>

                <div className='container'>
                    <InputGroup className="mb-1">
                        <Form.Control
                            placeholder="Search Restaurants..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2"
                            onClick={() => {
                                const data = filterData(searchText, allRestaurants);
                                setFilteredRestaurants(data);
                            }}> Search
                        </Button>
                    </InputGroup>

                    <div className='restaurant-list'>
                        {
                            filteredRestaurants.length === 0 ? "No data found" :
                                filteredRestaurants.map((restaurant) => {
                                    return (
                                        <LinkContainer
                                            to={"/restaurant/" + restaurant.data.id}
                                            key={restaurant.data.id}
                                            className="normal-text">
                                            <NavLink>
                                                <RestaurantCard {...restaurant.data} />
                                            </NavLink>
                                        </LinkContainer>
                                    )
                                })
                        }
                    </div>
                </div>
            </>
        )
}

export default Body;