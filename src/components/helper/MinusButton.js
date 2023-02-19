import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';

const MinusButton = ({ item }) => {
    const dispatch = useDispatch();

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <Button
            style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}
            onClick={() => removeFoodItem(item)}>
            -
        </Button>
    )
}

export default MinusButton