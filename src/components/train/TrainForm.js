import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import SelectStation from "./SelectStation";
import { sendData } from "../useData";
import { TIME_TABLE_URL } from '../../API/API_URL';

function TrainForm() {
  const navigate = useNavigate();
  const [departStation, setDepartStation] = useState("밀양");
  const [arriveStation, setArriveStation] = useState("부산");

  const onSubmit = async(e) => {
    e.preventDefault();
    const data = makeTrainData();
    const {time_schedules} = await sendData(TIME_TABLE_URL, JSON.stringify(data));
    data.timeSchedules = await time_schedules;

    navigate('/train/time-table', {
      state: data
    });
  }

  const makeTrainData = () => {
    const data = {};
    const dateData = document.querySelector('#date').value;
    const timeData = document.querySelector('#time').value;

    data.type = departStation === "밀양" ? "depart" : "arrive";
    data.date = dateData;
    data.departTime = timeData;
    data.departureStation = departStation;
    data.destinationStation = arriveStation;

    return data;
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => onSubmit(e)}>
        <SelectDate />
        <SelectTime />
        <SelectStation 
          departStation={departStation}
          arriveStation={arriveStation}
          setDepartStation={setDepartStation}
          setArriveStation={setArriveStation}
        />
      </form>
    </div>
  );
}

export default TrainForm;
