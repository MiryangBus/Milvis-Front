import React from 'react'
import { useState, useCallback } from 'react'

import { STATIONS } from '../utils/Constant'
import StationToggleHandler from '../utils/StationToggleHandler';
import InputHandler from '../utils/InputHandler';

function StationSearch({departStation, arriveStation, setDepartStation, setArriveStation}) {
  const [departToggle, setDepartToggle] = useState(false);
  const [arriveToggle, setArriveToggle] = useState(false);
  const [stationLists, setStationLists] = useState([]);
  const [value, setValue] = useState('');
  const inputHandler = new InputHandler(setValue);
  const stationToggleHandler = new StationToggleHandler(
    departToggle,
    arriveToggle,
    setDepartToggle, 
    setArriveToggle,
  );

  // * event: reverse-arrow 
  const clickReverseArrow = () => {
    const depart = departStation;
    const arrive = arriveStation;

    setDepartStation((curr) => {
      curr = arrive;
      return curr;
    });

    setArriveStation((curr) => {
      curr = depart;
      return curr;
    })
  }

  // * Station Handler
  const setMilyang = (value) => {
    if (departToggle) {
      if (value !== "밀양") {
        setArriveStation("밀양");
      } 
    } 
    
    if (arriveToggle) {
      if (value !== "밀양") {
        setDepartStation("밀양");
      }
    }
  }

  const changeDepartStation = (station) => {
    setDepartStation((curr) => {
      curr = station;
      return curr;
    })
    setMilyang(value);
    stationToggleHandler.closeDepartToggle();
  }

  const changeArriveStation = (station) => {
    setArriveStation((curr) => {
      curr = station;
      return curr;
    })
    setMilyang(value);
    stationToggleHandler.closeArriveTogle();
  }

  // * event: click li
  const clickLists = (e) => {
    const station = e.target.innerText;

    if (departToggle) {
      changeDepartStation(station);
    }
    if (arriveToggle) {
      changeArriveStation(station);
    }
    setStationLists((curr) => {
      curr = [];
      return curr;
    })
  }

  // * make List
  const debounceSearchFunction = (callback, time) => {
    let timer = undefined;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), time);
    }
  }

  const compareLists = (station, value) => {
    const reg = new RegExp(value);

    return reg.test(station) ? true : false;
  }

  const makeStationLists = (value) => {
    const nextStationLists = [];

    STATIONS.ALL.forEach((station) => {
      if (compareLists(station.name, value)) {
        nextStationLists.push(station.name);
      }
    })

    setStationLists((curr) => {
      curr = nextStationLists;
      return curr;
    })
  }

  const findSameKeywordStation = useCallback(
    debounceSearchFunction((value) => makeStationLists(value), 250),
    []
  )

  const searchStationLists = (e) => {
    if (e.target.value !== '') {
      findSameKeywordStation(e.target.value);
    }
  }

  // * components
  const StationSearchHeader = () => {
    return (
      <div id="station-search-header">
        <div id="deaprt">출발</div>
        <div id="reverse-arrow" onClick={clickReverseArrow}>←→</div>
        <div id="arrive">도착</div>
      </div>
    )
  }

  const StationLists = () => {
    return (
      <ul id="search-station-ul">
      {stationLists.map((element, index) => {
        return (
        <li 
        className='search-station-li'
        key={index}
        onClick={(e) => clickLists(e)}>
        {element}
        </li>
        )})}
    </ul>
    )
  }

  const Station = () => {
    return (
      <div id="stations">
        <div
        id="depart-station"
        className={departToggle === true ? 'focus' : ''}
        onClick={(e) => {
          stationToggleHandler.setDepartStationSearchBar(e);
          inputHandler.initInputValue();
        }}>
          {departStation}
        </div>
        <div
        id="arrive-station"
        className={arriveToggle === true ? 'focus' : ''}
        onClick={(e) => {
          stationToggleHandler.setArriveStationSearchBar(e);
          inputHandler.initInputValue();
        }}>
          {arriveStation}
        </div>
      </div>
    )
  }

  // ! input을 Component로 만들어 return 하게 되면 새 input이 만들어진다.
  return (
    <div id='station-search-form'>
      <StationSearchHeader />
      <Station />
      <input
      value={value}
      onChange={(e) => inputHandler.changeDepartStationInput(e)}
      onKeyUp={searchStationLists}
      placeholder='찾고 싶은 역을 검색해보세요.'
      className={departToggle === true ? '' : 'hidden-bar'}
      />
      <input
      value={value}
      onChange={(e) => inputHandler.changeArriveStationInput(e)}
      onKeyUp={searchStationLists}
      placeholder='찾고 싶은 역을 검색해보세요.'
      className={arriveToggle === true ? '' : 'hidden-bar'}
      />
      <StationLists />
    </div>
  )
}

export default StationSearch
