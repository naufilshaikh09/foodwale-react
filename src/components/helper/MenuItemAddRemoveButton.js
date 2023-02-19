import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../utils/cartSlice';

const MenuItemAddRemoveButton = ({ cartItems, item, id }) => {
    const dispatch = useDispatch();

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    }

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <>
            <Button
                className='add-remove-btn-font-color'
                style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}
                onClick={() => removeFoodItem(item)}>
                -
            </Button>

            <Button
                className='add-remove-btn-font-color'
                style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}>
                {
                    cartItems.filter(x => x.id == id).length
                }
            </Button>

            <Button
                className='add-remove-btn-font-color'
                style={{ background: "white", borderColor: "white", color: "black", borderRadius: "0" }}
                onClick={() => addFoodItem(item)}>
                +
            </Button>
        </>
    )
}

export default MenuItemAddRemoveButton