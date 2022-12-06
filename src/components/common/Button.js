import React from 'react'
import "./Button.css";

const sizes = ['long-button', 'short-button', 'search-button'];

const Button = ({buttonsize, content, type, disable}) => {
  const buttonSelect = () => {
    if (buttonsize === sizes[0]) {
      return sizes[0];
    }

    else if (buttonsize === sizes[1]) {
      return sizes[1];
    }

    else if (buttonsize === sizes[2]) {
      return sizes[2];
    }
  }

  return (
    <button
      className={buttonSelect()}
      type={type}
      disabled={disable === undefined ? false : disable}
    >
      {content}
    </button>
  )
}

export default Button
