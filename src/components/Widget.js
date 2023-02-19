import React from 'react'

const Widget = ({ name, index }) => {
    return (
        <li
            className="li-style"
            key={index}>
            {name}
        </li>
    )
}

export default Widget