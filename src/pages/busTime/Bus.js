import React,{useState,useEffect} from 'react';
import "./Bus.css";
import FooterBus from "../../components/FooterBus";
import {Truck} from 'react-bootstrap-icons' ;
import HeaderBus from "../../components/HeaderBus";
import BusTime from '../../components/BusTime';

const Bus = () =>  {
  const [date, setDate] = useState();
  const [goto,setGoto] =useState("station");
  useEffect(() => {
    console.log(date);
  },[date]);
  useEffect(() => {
    console.log(goto);
  },[goto]);

  return (
  <>
    <HeaderBus date={date} setDate={setDate}></HeaderBus>
    <div className="bus-content">
      <div className = "bus-stop">
        <text>캠퍼스</text>
        <text>영남루</text>
        <text>밀양역</text>
      </div>
      <div className='bus-content-time'>
        <BusTime goto = {goto} date={date}></BusTime>
      </div>
    </div>
    <FooterBus goto={goto} setGoto={setGoto}></FooterBus>
  </>
  )
}
export default Bus

