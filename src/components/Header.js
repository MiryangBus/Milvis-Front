import React from 'react'
import "./Header.css";
import {List} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="title-container" >
        <Link to = "/" style={{ textDecoration: 'none' , color:"white"}}>
            <h1>Milvis</h1>
        </Link>
      </div>

      <Link to = "/sidebar" style={{ textDecoration: 'none' , color:"white"}}>
        <div className="navbar-container">
          <List width={"2rem"} height={"2rem"}/>
        </div>
      </Link>

    </header>
  )
}
export default Header