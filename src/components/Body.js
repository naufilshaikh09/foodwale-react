import { restaurantList } from '../constant';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

function filterData(searchText) {
    return restaurantList.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    });
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
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
                        const data = filterData(searchText);
                        setRestaurants(data);
                    }}
                > Search
                </button>
            </div>
            <div className='restaurant-list'>
                {restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })}
            </div>
        </>
    )
}

export default Body;