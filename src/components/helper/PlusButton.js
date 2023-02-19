import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

const PlusButton = ({ item }) => {
    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <Button
            style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}
            onClick={() => addFoodItem(item)}>
            +
        </Button>
    )
}

export default PlusButton