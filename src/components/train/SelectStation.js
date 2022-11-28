import { useState } from 'react';

import Button from '../common/Button';

function SelectStation({departStation, arriveStation, setDepartStation, setArriveStation}) {
  const [departFlag, setDepartFlag] = useState(0);
  const [arriveFlag, setArriveFlag] = useState(0);

  const stations = {
    "popular": [
        { "name": "서울" },
        { "name": "부산" },
        { "name": "밀양" },
        { "name": "동대구" }
    ],
    "stations": [
        { "name": "서울" },
        { "name": "부산" },
        { "name": "밀양" },
        { "name": "동대구" }
    ]
  }

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

  return (
    <>
      <div className="train-input-container">
        <div className="train-contents-container">
          <div className="depart-container" onClick={departClick}>
            <div>출발</div>
            <div
              className={departFlag === 1 ? "focus train-select" : "train-select"}
              id="depart">
              {departStation}
            </div>
          </div>
          <div className="reverse-arrow-container" onClick={reverseStation}>
            ←→
          </div>
          <div
            className={arriveFlag === 1 ? "focus arrive-container" : "arrive-container"}
            onClick={arriveClick}>
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
        <Button
            type={"submit"}
            buttonsize={"search-button"}
            content={"시간표 조회하기"}
        />
      </div>
    </>
  )
}

export default SelectStation
