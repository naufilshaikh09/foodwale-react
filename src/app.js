import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import Offer from './components/Offer';
import Help from './components/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';

const Offer = lazy(() => import("./components/Offer"))

const AppLayout = () => {
    const [user, setUser] = useState({
        // email: "xyz@gmail.com",
    });

    return (
        <Provider store={store}>
            <userContext.Provider
                value={{
                    user: user,
                    setUser: setUser
                }}>
                <Header />
                <Outlet />
                <Footer />
            </userContext.Provider>
        </Provider>
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
                path: '/offer',
                element: <Suspense fallback={<Shimmer />}><Offer /></Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/help',
                element: <Help />
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
