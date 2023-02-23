import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const CartAddress = () => {
    return (
        <>
            <div>Select Delivery Address</div>
            <p className='normal-text small-text'>You have a saved address in this location</p>

            <Row style={{ marginTop: "30px" }}>
                <Col>
                    <div style={{ border: "2px solid #e9ecee", height: "218px", width: "324px" }}>
                        <div style={{ margin: "10px", padding: "10px" }}>
                            <h6>Work</h6>
                            <p className='normal-text small-text'>A-1111 ABC Road, Near PQR Garden, Ahmedabad-123456</p>
                            <p>10 minutes</p>
                            <Button className='address-btn'>Deliver here</Button>
                        </div>
                    </div></Col>
                <Col>
                    <div style={{ border: "2px dotted #e9ecee", height: "218px", width: "324px" }}>
                        <div style={{ margin: "10px", padding: "10px" }}>
                            <h6>Add New Address</h6>
                            <p className='normal-text small-text'>Ahmedabad-123456</p>
                            <Button className='address-btn'>Add New</Button>
                        </div>
                    </div></Col>
            </Row>
        </>
    )
}

export default CartAddress