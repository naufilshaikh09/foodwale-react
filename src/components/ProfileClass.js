import { Component } from "react";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: 'Ahm-1',
            address: 'Ahm-2'
        }

        console.log("constructor child-1");
    }

    componentDidMount() {
        console.log("componentDidMount child-1");
        this.timer = setInterval(() => {
            console.log("NAMASTE REACT");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate child-1");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount child-1");
        clearInterval(this.timer);
    }

    render() {
        console.log("render child-1");
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        location: "Ahm-3",
                        address: "Ahm-4"
                    })
                }}>Change Address</button>
                <h1>Name:{this.props.name}</h1>
                <h1>Location:{this.state.location}</h1>
                <h1>Address:{this.state.address}</h1>
            </>
        )
    }
}

export default Profile