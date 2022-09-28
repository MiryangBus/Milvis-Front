import React from 'react'
import "./Bus.css";
import FooterBus from "../components/Footer-bus";
import {Truck} from 'react-bootstrap-icons' ;

const Bus = () =>  {
  return (
  <>
    <div className="bus-date">
      <text>평일</text>
      <text className="bus-date-space">주말</text>
      <text className="bus-date-space">대학만 방학</text>  
      <text className="bus-date-space">모두 방학</text> {/*한줄 안띄우는건 div아닌 text*/}
    </div>
    <div className="bus-content">
      <div className = "bus-stop">
        <text>밀양캠</text> {/* font 정해서 일괄 적용하기 */}
        <text className="bus-stop-space">영남루</text>
        <text className="bus-stop-space">밀양역</text>
      </div>
      <Truck front size="3em" width="7em" color="black"/>
    </div>





    <FooterBus></FooterBus>
  </>

  )
}
export default Bus