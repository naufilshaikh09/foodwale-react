import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartDetails from "./CartDetails";
import CartAddress from "./CartAddress";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    // const dispatch = useDispatch();

    // const handleClearCart = () => {
    //     dispatch(clearCart());
    // }

    return (
        // <div>
        //     <h1>Cart Items - {cartItems?.length}</h1>
        //     {cartItems?.length > 0 ? <Button onClick={() => handleClearCart()}>Clear Cart</Button> : ""}
        //     <div className="restaurant-list">
        //         {cartItems.map((item) => (
        //             <CartDetails key={item.id} {...item} />
        //         ))}
        //     </div>
        // </div>

        <div style={{ background: "#e9ecee", height: "100%" }}>
            <Container style={{ padding: "50px" }}>
                <Row style={{ background: "white" }}>
                    <div style={{ width: "65%", padding: "0px" }}>
                        <Col style={{ margin: "10px", padding: "10px", boxShadow: "0 2px 14px #e9ecee" }}>
                            <div>
                                <CartAddress />
                            </div>
                        </Col>
                    </div>

                    <div style={{ width: "35%", padding: "0px" }}>
                        <Col style={{ margin: "10px", padding: "10px", boxShadow: "0 2px 14px #e9ecee" }}>
                            <div>
                                {/* {cartItems.map((item) => ( */}
                                <CartDetails cartItems={cartItems} />
                                {/* ))} */}
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Cart