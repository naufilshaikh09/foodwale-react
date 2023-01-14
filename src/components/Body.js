import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { RESTAURANT_API } from '../constant'

function filterData(searchText, restaurants) {
    return restaurants.filter((x) => {
        return x?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    });
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurantList();
    }, [])

    async function getRestaurantList() {
        try {
            let data = await fetch(RESTAURANT_API);

            let fetchJson = await data.json();

            setAllRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
            console.log('There was an error while fetching restaurant ddata', error);
        }
    }

    return (allRestaurants?.length === 0)
        ? <Shimmer />
        : (
            <>
                <div className='search-container'>
                    <input
                        type='text'
                        className='search-input'
                        placeholder='search'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className='search-btn'
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data);
                        }}
                    > Search
                    </button>
                </div>
                <div className='restaurant-list'>
                    {
                        filteredRestaurants.length === 0 ? "No data found" :
                            filteredRestaurants.map((restaurant) => {
                                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                            })
                    }
                </div>
            </>
        )
}

export default Body;