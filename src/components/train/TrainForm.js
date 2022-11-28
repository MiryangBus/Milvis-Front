import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectDate from "./SelectDate";
import Button from '../common/Button';
import { sendData } from "../useData";
import { TIME_TABLE_URL } from '../../API/API_URL';

function TrainForm() {
  const navigate = useNavigate();
  // Flag State
  // 출발, 도착역을 선택할 수 있는 option 들을 보여주는 플래그
  const [departFlag, setDepartFlag] = useState(0);
  const [arriveFlag, setArriveFlag] = useState(0);
  // Station State
  // 출발, 도착 역에 따라 바뀌는 state
  const [departStation, setDepartStation] = useState("밀양");
  const [arriveStation, setArriveStation] = useState("부산");

  const stations = {
    popular: [
      { name: "서울" },
      { name: "부산" },
      { name: "밀양" },
      { name: "동대구" },
    ],
    stations: [
      { name: "서울" },
      { name: "부산" },
      { name: "밀양" },
      { name: "동대구" },
    ],
  };


  // * 1.1 min - max 시간 설정
  const today = new Date().toISOString().split("T")[0];
  // 1.1 한달 뒤 날짜 계산하는 함수
  const timeCal = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const endDt = new Date(year, month, day + 31).toISOString().split("T")[0];

    return endDt;
  };

  // --------------------------------------------------------------------------------

  // * 2. 시간 조회 컴포넌트 <TimeSelect />

  const TimeSelect = () => {
    const times = [];
    // 시간 06~23시를 times 배열 안에 push
    for (let i = 6; i < 24; i++) {
      const c = String(i).padStart(2, "0");
      times.push(c);
    }
    // render
    // <option>시간</option> 형태
    return (
      <select id="time">
        <optgroup className="time-options">
          {times.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </optgroup>
      </select>
    );
  };

  // --------------------------------------------------------------------------------

  // * 3. 출발역, 도착역 조회 관련 메소드

  // 3.0 출발역 도착역들을 보여주는 컴포넌트
  const StationSelect = () => {
    const selected = departFlag === 1 ? departStation : arriveStation;
    return (
      <select className="" onChange={(e) => stationChange(e)}>
        <optgroup label="자주 찾는 역">
          {stations.popular.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </optgroup>
        <optgroup label="역">
          {stations.stations.map((item, index) => {
            return item.name === selected ? (
              <option selected key={index}>
                {item.name}
              </option>
            ) : (
              <option key={index}>{item.name}</option>
            );
          })}
        </optgroup>
      </select>
    );
  };

  // 3.1 출발역 클릭 시 출발역 리스트 보여주는 함수
  const departClick = () => {
    // 도착역을 보여주는 컴포넌트를 숨김
    setArriveFlag((current) => {
      current = 0;
      return current;
    });
    // 출발역 리스트 컴포넌트를 보여줌
    setDepartFlag((current) => {
      if (current === 0) {
        current = 1;
      } else if (current === 1) {
        // 만약 이미 컴포넌트가 활성돼 있으면 -> 닫기
        current = 0;
      }
      return current;
    });
  };

  // 3.2 도착역 클릭 시 도착역 리스트 보여주는 함수
  const arriveClick = () => {
    // 출발역을 보여주는 컴포넌트를 숨김
    setDepartFlag((current) => {
      current = 0;
      return current;
    });
    // 도착역 리스트 컴포넌트를 보여줌
    setArriveFlag((current) => {
      if (current === 0) {
        current = 1;
      } else if (current === 1) {
        // 이미 컴포넌트 활성돼 있는 상태라면 -> 닫기
        current = 0;
      }
      return current;
    });
  };

  // 3.3 reverse Icon 클릭 시 출발역과 도착역을 바꿔주는 함수
  const reverseStation = () => {
    const depart = departStation;
    const arrive = arriveStation;
    // 서로의 state를 바꿔 줌
    setDepartStation((current) => {
      current = arrive;
      return current;
    });

    setArriveStation((current) => {
      current = depart;
      return current;
    });
  };

  // 3.4 출발 역 - 도착 역 중 역을 선택하면 다른 역을 밀양역으로 바꿔주는 함수
  const stationChange = (e) => {
    // 클릭한 target의 역 이름을 가져옴
    const name = e.target.value;

    /* 
      출발역의 역을 변경 -> departFlag가 1로 설정된 상태
      도착역을 자동으로 밀양역으로 바꿔야 함 
    */
    if (departFlag === 1) {
      setDepartStation((current) => {
        current = name;
        // 도착역이 이미 밀양역으로 설정되지 않은 경우에만
        if (arriveStation !== "밀양" && current !== "밀양") {
          // 도착역 state를 밀양으로 바꾸기
          setArriveStation((current) => {
            current = "밀양";
            return current;
          });
        }
        return current;
      });
      // departFlag를 0으로 바꿈
      setDepartFlag((current) => {
        current = 0;
        return current;
      });
    }
    /* 
      도착역이 바뀐 경우 -> arriveFlag 가 1로 설정 돼 있음
      자동으로 출발역을 밀양역으로 바꿔줘야 함
    */
    if (arriveFlag === 1) {
      setArriveStation((current) => {
        current = name;
        // 출발역이 이미 밀양역이면 바꿀 필요 없음
        if (departStation !== "밀양" && current !== "밀양") {
          setDepartStation((current) => {
            current = "밀양";
            return current;
          });
        }
        return current;
      });
      // flag를 다시 0으로 복귀
      setArriveFlag((current) => {
        current = 0;
        return current;
      });
    }
  };

  // --------------------------------------------------------------------------------

  // * 4. Submit Button 눌렀을 때

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {};

    const dateData = document.querySelector("#date").value;
    const timeData = document.querySelector("select").value;

    data.date = dateData;
    data.time = timeData;
    data.departure_station = departStation;
    data.destination_station = arriveStation;

    sendData(TIME_TABLE_URL, JSON.stringify(data));

    /* 4.2 페이지 전환 
      (Link를 Button에 달면 require이 안 먹음)
      navigate 함수로 강제 url이동 */
    // navigate('/train-result');
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => onSubmit(e)}>
        <SelectDate />
        <div className="time-input-container">
          <label htmlFor="">출발 시각</label>
          <p className="small-explain">
            <span>❗️</span>캠퍼스에서 출발할 경우 버스가 출발하는 시간을
            선택해주세요.
          </p>
          <TimeSelect />
        </div>
        <div className="train-input-container">
          <div className="train-contents-container">
            <div className="depart-container" onClick={departClick}>
              <div>출발</div>
              <div
                className={
                  departFlag === 1 ? "focus train-select" : "train-select"
                }
                id="depart"
              >
                {departStation}
              </div>
            </div>
            <div className="reverse-arrow-container" onClick={reverseStation}>
              ←→
            </div>
            <div
              className={
                arriveFlag === 1 ? "focus arrive-container" : "arrive-container"
              }
              onClick={arriveClick}
            >
              <div>도착</div>
              <div className="train-select" id="arrive">
                {arriveStation}
              </div>
            </div>
          </div>
          <div className="station-select-container">
            {departFlag === 1 ? <StationSelect /> : ""}
            {arriveFlag === 1 ? <StationSelect /> : ""}
          </div>
        </div>
        <div className="button-container">
          <Button
            type={"submit"}
            buttonsize={"search-button"}
            content={"시간표 조회하기"}
          />
        </div>
      </form>
    </div>
  );
}

export default TrainForm;
