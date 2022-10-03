import "./Header.css";
import {List} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
import React, { useState } from "react";
import SideBar from "./SideBar";
const Header = () => {

  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  
  return (
    <header>
      <div className="title-container" >
        <Link to = "/" style={{ textDecoration: 'none' , color:"white"}}>
            <h1>Milvis</h1>
        </Link>
      </div>

      <div className="navbar-container">
      <div className={`sidebar ${isOpen ? "sidebar--open" : "" }`}>
          <List onClick={ToggleSidebar} width={"2rem"} height={"2rem"}/>
          {console.log(isOpen)} 
          <div className="sidebar-position">
          <span>Home</span>
          </div>
          <div className="sidebar-position">
            <span>Menu item 2</span>
          </div>
          <div className="sidebar-position">
            <span>Menu item 3</span>
          </div>
          <div className="sidebar-position">
            <span>Position 4</span>
          </div>
      </div>


      
      </div>
    </header>
  )
}
export default Header
//



{/* <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
  <div className="trigger" onClick={handleTrigger}>
    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
  </div> // 열었을 때 x 또는 삼단바

  <div className="sidebar-position">
    <span>Home</span>
  </div>
  <div className="sidebar-position">
    <span>Menu item 2</span>
  </div>
  <div className="sidebar-position">
    <span>Menu item 3</span>
  </div>
  <div className="sidebar-position">
    <span>Position 4</span>
  </div> */}
