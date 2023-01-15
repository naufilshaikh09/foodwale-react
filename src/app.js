import React, { Children } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurant/:restId',
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

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
