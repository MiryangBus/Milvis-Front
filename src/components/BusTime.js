import React from 'react';

import { Truck } from 'react-bootstrap-icons' ;

const BusTimeTable = [
  {ID:1, hour:6, goto:'station', date:"weekday", time1:'a6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:2, hour:6, goto:'station', date:"weekday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:3, hour:6, goto:'station', date:"weekday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:4, hour:6, goto:'station', date:"weekday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:5, hour:7, goto:'station', date:"weekday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:6, hour:7, goto:'station', date:"weekday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:7, hour:6, goto:'station', date:"weekend", time1:'b6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:8, hour:6, goto:'station', date:"weekend", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:9, hour:6, goto:'station', date:"weekend", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:10, hour:6, goto:'station', date:"weekend", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:11, hour:7, goto:'station', date:"weekend", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:12, hour:7, goto:'station', date:"weekend", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:13, hour:6, goto:'station', date:"campusHoliday", time1:'c6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:14, hour:6, goto:'station', date:"campusHoliday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:15, hour:6, goto:'station', date:"campusHoliday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:16, hour:6, goto:'station', date:"campusHoliday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:17, hour:7, goto:'station', date:"campusHoliday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:18, hour:7, goto:'station', date:"campusHoliday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},

  {ID:19, hour:6, goto:'station', date:"holiday", time1:'d6시 05분',time2:'6시 05분',time3:'6시 05분'},
  {ID:20, hour:6, goto:'station', date:"holiday", time1:'6시 10분',time2:'6시 05분',time3:'6시 05분'},
  {ID:21, hour:6, goto:'station', date:"holiday", time1:'6시 34분',time2:'6시 05분',time3:'6시 05분'},
  {ID:22, hour:6, goto:'station', date:"holiday", time1:'6시 55분',time2:'6시 05분',time3:'6시 05분'},
  {ID:23, hour:7, goto:'station', date:"holiday", time1:'7시 05분',time2:'7시 05분',time3:'7시 05분'},
  {ID:24, hour:7, goto:'station', date:"holiday", time1:'7시 35분',time2:'6시 05분',time3:'6시 05분'},
];


const BusTime = (props) =>  {
  return (
  <>
    <div>
      <Truck front size="3em" width="7em" color="black"/>
      {BusTimeTable.filter((bustime) => bustime.date === props.date && bustime.goto===props.goto).map((bustime, i) => (
        <div key={bustime.ID}>{bustime.time1}</div>
      ))}
      </div>

    <div>
      <Truck front size="3em" width="7em" color="black"/>
      {BusTimeTable.filter((bustime) => bustime.date === props.date && bustime.goto===props.goto).map((bustime, i) => (
        <div key={bustime.ID}>{bustime.time2}</div>
      ))}    
    </div>

    <div>
      <Truck front size="3em" width="7em" color="black"/>
      {BusTimeTable.filter((bustime) => bustime.date === props.date && bustime.goto===props.goto).map((bustime, i) => (
        <div key={bustime.ID}>{bustime.time3}</div>
      ))}    
    </div>
  </>
  )
}
export default BusTime
