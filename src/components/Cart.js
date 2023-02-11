import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import { Button } from "react-bootstrap";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <div>
            <h1>Cart Items - {cartItems?.length}</h1>
            {cartItems?.length > 0 ? <Button onClick={() => handleClearCart()}>Clear Cart</Button> : ""}
            <div className="restaurant-list">
                {cartItems.map((item) => (
                    <FoodItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Cart