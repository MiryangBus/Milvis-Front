import React from 'react'

const sizes = ['long-button', 'short-button', 'search-button'];

const Button = ({button(Size, content}) => {
  const buttonSelect = () => {
    if (buttonSize === sizes[0]) {
      return sizes[0];
    }

    else if (buttonSize === sizes[1]) {
      return sizes[1];
    }

    else if (buttonSize === sizes[2]) {
      return sizes[2];
    }
  }

  return (
    <styleButton
      buttonSize={buttonSelect()}
    >
      ${content}
    </styleButton>
  )
}

export default Button
