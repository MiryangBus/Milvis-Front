import React,{useState, useEffect} from 'react';
import "./Bus.css";
import FooterBus from "../components/Footer-bus";
import {Link} from 'react-router-dom'
import BusTime from '../components/BusTime';
import HeaderBus from '../components/Header-bus';
import ReactDOM from 'react-dom'
const Bus = () =>  {
  const [date, setDate] = useState("weekday");

  const handleClickButton = e => {
    const { date } = e.target;
    setDate(date);
  };
  


  return (
  <>
  <div className="bus-date">
    <HeaderBus onClick={handleClickButton} date={"weekday"}>평일</HeaderBus>
    <HeaderBus date={"weekend"}>주말</HeaderBus>
    <HeaderBus date={"onlyCampus"}>대학만 방학</HeaderBus>
    <HeaderBus date={"holiday"}>모두 방학</HeaderBus>
  </div>

    <div className="bus-content">
      <div className = "bus-stop">
        <text>캠퍼스</text>
        <text>영남루</text>
        <text>밀양역</text>
      </div>
      <div className='bus-content-time'>
        <BusTime date={date}></BusTime>
      </div>
    </div>
    <FooterBus></FooterBus>
  </>
  )
}

export default Bus
