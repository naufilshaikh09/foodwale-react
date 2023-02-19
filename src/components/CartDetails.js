import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import MenuItemAddRemoveButton from './helper/MenuItemAddRemoveButton';

const CartDetails = ({ cartItems }) => {
    const uniqueCart = [...new Set(cartItems)];
    const total = cartItems.length > 0
        ? cartItems.map(x => (x.price / 100)).reduce((sum, a) => sum + a, 0)
        : 0;

    return (
        <>
            <h5>
                Cart Details
            </h5>
            {
                uniqueCart.map((item) => {
                    return (
                        <div
                            key={item.id}
                            style={{ marginBottom: "10px" }}>
                            <Row style={{ fontSize: "14px" }}>
                                <Col>{item.name}</Col>
                                <Col>
                                    <div className="item-add-remove-cart">
                                        <MenuItemAddRemoveButton
                                            cartItems={cartItems}
                                            item={item}
                                            id={item.id} />
                                    </div>

                                </Col>
                                <Col>&#8377;{(item.price * cartItems.filter(x => x.id == item.id).length) / 100}</Col>
                            </Row>
                        </div>
                    )
                })
            }

            <div
                style={{ border: "1px dotted black", marginBottom: "15px", padding: "10px", width: "80%" }}>
                <p className='normal-text small-text'>"Any suggestions? We will pass it on...</p>
            </div>

            <div
                style={{ border: "1px dotted black", marginBottom: "15px", padding: "10px", width: "80%" }}>
                Opt in for No-contact Delivery
                <p
                    className='normal-text small-text'>
                    Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                </p>
            </div>

            <div
                style={{ border: "1px dotted black", marginBottom: "15px", padding: "10px", width: "80%" }}>
                Apply Coupon
            </div>

            <div>
                <h5>Bill Details</h5>
                <Row>
                    <Col>
                        <p className='normal-text small-text'>Item Total</p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <b><p>&#8377;{total}</p></b>
                    </Col>
                </Row>
            </div>

            <div style={{ marginTop: "0px", marginBottom: "10px", border: "1px solid black", width: "80%" }}></div>

            <div>
                <Row>
                    <Col>
                        <p className='normal-text small-text'>Total Pay</p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <b><p>&#8377;{total}</p></b>
                    </Col>
                </Row>
            </div>

            <Button className='checkout-btn'>Proceed to pay</Button>
        </>
    )
}

export default CartDetails;

// src={IMG_CDN_URL + cloudinaryImageId}