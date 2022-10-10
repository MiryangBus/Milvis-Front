
import React from 'react'
import "./Header.css";
import "../page/Bus.css";
import {Link} from 'react-router-dom'
import BusTime from './BusTime';


const HeaderBus = (props) => {
  return (
    <>
      <Link to={`../bus/${props.date}`} style={{ textDecoration: 'none' , color:"white"}} >{props.children}</Link>
      {console.log("header")}
    </>

  )
}
export default HeaderBus
