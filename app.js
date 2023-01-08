import React from 'react';
import ReactDOM from 'react-dom/client';

/** 
   Header
    - Logo(Title)
    - Nav Items
    - Cart
   Body
    - Search bar
    - RestaurantList
        - RestaurantCard (Multiple)
            - Image
            - Name
            - Rating 
            - Cusines
    Footer
        - Links
        - Copyright
*/

const Title = () => {
    <a href='/'>
        <img
            className='logo'
            alt='logo'
            src='https://cdn.dribbble.com/users/4467599/screenshots/11350206/swiggy-logo_4x.jpg'
        />
    </a>
}

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {

}

const Footer = () => {
    return <h4>Footer</h4>
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)