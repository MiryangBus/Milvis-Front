import React from 'react'
import "./Header.css";
import {List} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="title-container" >
        <Link to = "/" style={{ textDecoration: 'none' , color: "white"}}>
            <h1>Milvis</h1>
        </Link>
      </div>
      <div className="navbar-container">
        <Link to = "/sidebar" style={{ textDecoration: 'none' , color: "white"}}>
          <List width={"2rem"} height={"2rem"}/>
          </Link>
      </div>
    </header>
  )
}
export default Header