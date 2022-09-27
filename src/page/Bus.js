import React from 'react'
import "./Bus.css";
import FooterBus from "../components/Footer-bus";
const Bus = () =>  {
  return (
  <>
    <div className="bus-date">
      <text>평일</text>
      <text className="bus-date-space">주말</text>
      <text className="bus-date-space">대학만 방학</text>  
      <text className="bus-date-space">모두 방학</text> {/*한줄 안띄우는건 div아닌 text*/}
    </div>
    <FooterBus></FooterBus>
  </>
    
  )
}

export default Bus

