import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import userContext from './utils/userContext';

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [user, setUser] = useState({
        // email: "xyz@gmail.com",
    });

    return (
        <userContext.Provider
            value={{
                user: user,
                setUser: setUser
            }}>
            <Header />
            <Outlet />
            <Footer />
        </userContext.Provider>
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
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
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
