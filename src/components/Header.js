import React from 'react'
import "./Header.css";
import {List} from 'react-bootstrap-icons';

const Header = () => {
  return (
    <header>
      <div className="title-container">
        <h1>Milvis</h1>
      </div>
      <div className="navbar-container">
        <List width={"2rem"} height={"2rem"}/>
      </div>
    </header>
  )
}

export default Header