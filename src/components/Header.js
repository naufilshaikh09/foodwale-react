import { useState } from "react";

const Title = () => {
    return (
        <a href='/'>
            <img
                className='logo'
                alt='logo'
                src='https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj'
            />
        </a>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <div>
                {
                    isLoggedIn
                        ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                        : <button onClick={() => setIsLoggedIn(true)}>Login</button>
                }
            </div>
        </div>
    )
}

export default Header;