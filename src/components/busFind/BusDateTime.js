import React, { useEffect, useState } from "react";
import "./BusDateTime.css";
//버스 날짜 및 시간 설정
const BusDateTime = (props) => {
    const dateNow = new Date();
    const today = dateNow.toISOString().slice(0, 10);

  return (
    <div>
        <input
            id="date"
            type="date"
            defaultValue={today}
            onChange={(e) => props.setDate(e.target.value)}
        />
        <input
            id="time"
            type="time"
            onChange={(e) => props.setTime(e.target.value)}
        />
    </div>
  );
}

export default BusDateTime;

