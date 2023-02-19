import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import MenuItemAddRemoveButton from './helper/MenuItemAddRemoveButton'
import { LinkContainer } from 'react-router-bootstrap';

const MenuCart = ({ cartItems }) => {
    const uniqueCart = [...new Set(cartItems)];
    const total = cartItems.length > 0
        ? cartItems.map(x => (x.price / 100)).reduce((sum, a) => sum + a, 0)
        : 0;

    return (
        <>
            <h2 style={{ width: "278px" }}>
                Cart
            </h2>
            <p className='normal-text small-text'>{cartItems.length} ITEMS</p>
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

            <div>
                <Row>
                    <Col>
                        <h4>Subtotal</h4>
                        <p className='normal-text small-text'>Extra charges may apply</p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <b><p>&#8377;{total}</p></b>
                    </Col>
                </Row>
            </div>
            <LinkContainer to="/cart"><Button className='checkout-btn'>Checkout</Button></LinkContainer>
        </>
    )
}

export default MenuCart