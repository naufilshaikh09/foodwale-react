import { Outlet } from "react-router-dom";
import { Component } from 'react';
import ProfileClass from './ProfileClass';
import Profile from './Profile';

class About extends Component {
    constructor() {
        super();
        console.log("constructor panrent");
    }

    componentDidMount() {
        // Best place to make an Api call
        console.log("componentDidMount parent");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate parent");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount parent");
    }

    render() {
        console.log("render panrent");
        return (
            <>
                <h1>About Us</h1>
                <Profile />
                {/* <ProfileClass name={"React"} /> */}
                {/* <Outlet name={"React"} /> */}
            </>
        )
    }
}

export default About