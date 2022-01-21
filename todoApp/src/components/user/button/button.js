import React, { useState, useEffect } from "react"


function Button(props) {
    const {
        type = 'button',
        titleValue = '',
        textColor = "#333",
        handleOnClick = undefined,
        id,
    } = props

    useEffect(() => {
        window.addEventListener("click", (e) => handleOnClick)
    })


    return (
        <input
            type={type}
            defaultValue={titleValue}
            style={{ color: textColor }}
            onClick={handleOnClick}
            id = {id}
        >

        </input>
    )
}

export default Button