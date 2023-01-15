import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)

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
