import React, { useState, useEffect } from "react"


function Button(props) {

  const {
    type = 'button',
    titleValue = '',
    textColor = "#333",
    handleOnClick = undefined,
    className,
  } = props

  useEffect(() => {
    // Cái này để làm gì vậy, hình như không cần thiết
    window.addEventListener("click", (e) => handleOnClick)
  })

  return (
    <React.Fragment>
      <input
        type={type}
        defaultValue={titleValue}
        // Tránh sử dụng inline style
        style={{ color: textColor }}
        onClick={handleOnClick}
        className={className}
      >

      </input>
    </React.Fragment>



  );
}

export default Button;
