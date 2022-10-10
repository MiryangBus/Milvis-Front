import React from 'react';
import "../page/Bus.css";
import {Truck} from 'react-bootstrap-icons' ;

const BusTimeTable = [
  {ID:1, hour:6, goto:'station', date:"weekday", time1:'6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'station', date:"weekday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'station', date:"weekday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'station', date:"weekday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'station', date:"weekday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'station', date:"weekday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:7, hour:6, goto:'station', date:"weekend", time1:'6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:8, hour:6, goto:'station', date:"weekend", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:9, hour:6, goto:'station', date:"weekend", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:10, hour:6, goto:'station', date:"weekend", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:11, hour:7, goto:'station', date:"weekend", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:12, hour:7, goto:'station', date:"weekend", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
];

const timeList1 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time1}</li>)
const timeList2 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time2}</li>)
const timeList3 = BusTimeTable.map(bustime=> <li key={bustime.ID}>{bustime.time3}</li>)

const BusTime = (props) =>  {
    console.log(props.date)
  return (
  <>
    <div>
        <Truck front size="3em" width="7em" color="black"/>
        {timeList1}
    </div>
    <div>
        <Truck front size="3em" width="7em" color="black"/>
        {timeList2}
    </div>
    <div>
        <Truck front size="3em" width="7em" color="black"/>
        {timeList3}
    </div>
  </>
  )
}
export default BusTime


  
  




