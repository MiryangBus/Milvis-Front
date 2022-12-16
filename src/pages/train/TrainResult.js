import React from "react";
import { useLocation } from "react-router";

import ShowDepartInfo from "../../components/trainResult/ShowDepartInfo";
import TimeTable from "../../components/trainResult/TimeTable";

function TrainResult() {
  const { state } = useLocation();
  const data = state;
  
  return (
    <main>
      <ShowDepartInfo
        departStation={data.departStation}
        arriveStation={data.arriveStation}
        date={data.date}
        time={data.time}
      />
      <TimeTable
        type={data.type}
        timeSchedule={data.sortTimeSchedules}
      />
    </main>
  );
}

export default TrainResult;
