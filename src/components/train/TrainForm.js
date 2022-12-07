import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import SelectStation from "./SelectStation";
import Button from "../common/Button";
import { sendData } from "../useData";
import { TIME_TABLE_URL } from '../../API/API_URL';
import { EditTrainData } from "./EditTrainData";

// TODO: 상수 변수로 바꿔주기
function TrainForm() {
  const navigate = useNavigate();
  const [departStation, setDepartStation] = useState("밀양");
  const [arriveStation, setArriveStation] = useState("부산");

  const onSubmit = async(e) => {
    e.preventDefault();

    const data = makeRequestTrainData();
    const {time_schedules} = await sendData(TIME_TABLE_URL, JSON.stringify(data), 1);
    console.log(time_schedules);
    data.time_schedules = time_schedules;
    navigate('/train/time-table', {
      state: EditTrainData(data)
    });
  }

  const makeRequestTrainData = () => {
    const data = {};
    const dateData = document.querySelector('#date').value;
    const timeData = document.querySelector('#time').value;

    data.type = departStation === "밀양" ? "depart" : "arrive";
    data.date = dateData;
    data.time = timeData;
    data.departure_station = departStation;
    data.destination_station = arriveStation;

    return data;
  }

  const makeDisableButton = () => {
    if (departStation === arriveStation) {
      return true;
    }

    return false;
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
        <Button
        type={"submit"}
        buttonsize={"search-button"}
        content={"시간표 조회하기"}
        disable={makeDisableButton()}
        />
      </form>
    </div>
  );
}

export default TrainForm;
