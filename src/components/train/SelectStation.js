import { useState } from 'react';

import { STATIONS, TRAIN_OPTION_TITLE, BASIC_STATION } from '../utils/Constant';

function SelectStation({departStation, arriveStation, setDepartStation, setArriveStation}) {
  const [showDepartStations, setShowDepartStations] = useState(false);
  const [showArriveStations, setShowArriveStations] = useState(false);

  const departClick = () => {
    activeDepartLists();
  };

  const arriveClick = () => {
    activeArriveLists();
  };

  const deactiveDepartLists = () => {
    setShowDepartStations(flag => {
      flag = false;
      return flag;
    });
  }

  const deactiveArriveLists = () => {
    setShowArriveStations(flag => {
      flag = false;
      return flag;
    });
  }

  const activeDepartLists = () => {
    deactiveArriveLists();

    if (showDepartStations === true) {
      deactiveDepartLists();
    } else {
      setShowDepartStations(flag => {
        flag = true;
        return flag;
      });
    }
  }

  const activeArriveLists = () => {
    deactiveDepartLists();

    if (showArriveStations === true) {
      deactiveArriveLists();
    } else {
      setShowArriveStations(flag => {
        flag = true;
        return flag;
      });
    }
  }

  const reverseStation = () => {
    const depart = departStation;
    const arrive = arriveStation;

    setDepartStation((current) => {
      current = arrive;
      return current;
    });

    setArriveStation((current) => {
      current = depart;
      return current;
    });
  };

  const autoChangeStation = (e) => {
    const name = e.target.value;

    if (showDepartStations === true) {
      changeDepartStation(name);
    }
    if (showArriveStations === true) {
      changeArriveStation(name);
    }
  };

  const changeDepartStation = (name) => {
    setDepartStation((current) => {
      current = name;
      if (arriveStation !== BASIC_STATION.MILYANG && current !== BASIC_STATION.MILYANG) {
        setArriveStation((current) => {
          current = BASIC_STATION.MILYANG;
          return current;
        });
      }
      return current;
    });

    deactiveDepartLists();
  }

  const changeArriveStation = (name) => {
    setArriveStation((current) => {
      current = name;
      if (departStation !== BASIC_STATION.MILYANG && current !== BASIC_STATION.MILYANG) {
        setDepartStation((current) => {
          current = BASIC_STATION.MILYANG;
          return current;
        });
      }
      return current;
    });

    deactiveArriveLists();
  }

  // * components
  const InputStation = () => {
    return (
      <div className="train-contents-container">
        <div className="depart-container">
          <div>{TRAIN_OPTION_TITLE.DEAPRT}</div>
          <h1
            onClick={departClick}
            className={showDepartStations === true ? "focus train-select" : "train-select"}
            id="depart">
            {departStation}
          </h1>
        </div>
        <div className="reverse-arrow-container" onClick={reverseStation}>←→</div>
        <div>
          <div>{TRAIN_OPTION_TITLE.ARRIVE}</div>
          <h1
          onClick={arriveClick}
          className={showArriveStations === true ? "focus train-select" : "train-select"}
          id="arrive">
          {arriveStation}
          </h1>
        </div>
      </div>
    );
  }

  const StationLists = () => {
    const selected = showDepartStations === true ? departStation : arriveStation;

    return (
      <select 
      onChange={(e) => autoChangeStation(e)}
      defaultValue={selected}
      >
        <optgroup label="자주 찾는 역">
          {STATIONS.POPULAR.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </optgroup>
        <optgroup label="역">
          {STATIONS.ALL.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </optgroup>
      </select>
    );
  };

  // * rendering
  return (
    <>
      <div className="train-input-container">
        <InputStation />
        {showDepartStations === true || showArriveStations === true ? <StationLists /> : ""}
      </div>
    </>
  )
}

export default SelectStation
