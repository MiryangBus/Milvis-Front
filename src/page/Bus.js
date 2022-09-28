import React from 'react';
import "./Bus.css";
import FooterBus from "../components/Footer-bus";
import {Truck} from 'react-bootstrap-icons' ;



const BusTimeTable = [
  {ID:1, hour:6, goto:'station', time1:'6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'station', time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'station', time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'station', time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'station', time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'station', time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
];

const timeList = BusTimeTable.map(bustime=> <li key={bustime.id}>{bustime.time1}</li>)

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
        <text className="bus-stop-space">밀양역</text>
        <text className="bus-stop-space">영남루</text>
      </div>
      <Truck front size="3em" width="7em" color="black"/>
      <ul>{timeList}</ul>


    </div>
    <FooterBus></FooterBus>
  </>

  )
}
export default Bus







