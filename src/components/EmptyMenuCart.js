import React from 'react'
import { Image } from 'react-bootstrap'

const EmptyCart = ({ NO_CART_IMAGE_URL }) => {
  return (
    <>
      <h2 style={{ width: "278px" }}>
        Cart Empty
      </h2>
      <Image
        src={NO_CART_IMAGE_URL}
        style={{ width: "278px", height: "212px", marginTop: "20px", marginBottom: "20px" }}>
      </Image>
      <p
        className="small-text"
        style={{ width: "278px" }}>
        Good food is always cooking! Go ahead, order some yummy items from the menu.
      </p>
    </>
  )
}

export default EmptyCart