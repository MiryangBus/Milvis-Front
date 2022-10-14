import React from 'react'
import "./Header.css";
import "../page/Bus.css";
import {Link} from 'react-router-dom'

//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const HeaderBus = () => {
  return (
    <>
    <div className="bus-date">
      <Link className="bus-date-space" to='/bus' style={{ textDecoration: 'none' , color:"white"}}>평일</Link>
      <Link className="bus-date-space" to='/weekend' style={{ textDecoration: 'none' , color:"white"}}>주말</Link>
      <Link className="bus-date-space" to='/campusHoliday' style={{ textDecoration: 'none' , color:"white"}}>대학만 방학</Link>  
      <Link className="bus-date-space" to='/holiday' style={{ textDecoration: 'none' , color:"white"}}>모두 방학</Link> {/*한줄 안띄우는건 div아닌 text*/}
    </div>
    </>

  )
}

export default HeaderBus
