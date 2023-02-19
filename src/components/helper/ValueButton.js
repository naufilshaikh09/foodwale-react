import React from 'react'
import { Button } from 'react-bootstrap'

const ValueButton = ({ cartItems, id }) => {
    return (
        <Button style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}>
            {
                cartItems.filter(x => x.id == id).length
            }
        </Button>
    )
}

export default ValueButton