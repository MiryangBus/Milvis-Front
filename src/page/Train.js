import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import "./Train.css";
import {useState} from 'react';

// TODO
//검색바 기능 어떻게 할 것인지 결정하기
// TODO 
// 출발, 도착역 강조 표시

function Train() {  
  const navigate = useNavigate();
  const [departFlag, setDepartFlag] = useState(0);
  const [arriveFlag, setArriveFlag] = useState(0);
  const [departStation, setDepartStation] = useState('밀양');
  const [arriveStation, setArriveStation] = useState('부산');

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

  // * 한달 뒤 시간 계산 해주는 함수 + 시간 <select> </select> 컴포넌트

  const today = new Date().toISOString().split("T")[0];
  const timeCal = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const endDt = new Date(year, month, day + 31).toISOString().split("T")[0];

    return endDt;
  }

  const TimeSelect = () => {
    const times = [];

    for (let i=6; i<24; i++) {
      const c = String(i).padStart(2, '0');
      times.push(c);
    }

    return (
      <select id="time">
        <optgroup className='time-options'>
        {times.map((item, index) => {
          return <option key={index}>{item}</option>
        })}
        </optgroup>
      </select>
    )
  }

  // * ---------------------------------------------------------

  // * depart & arrive 클릭 이벤트 함수 & <select></select> 컴포넌트 

  const departClick = () => {
    setArriveFlag(current =>  {
      current = 0;
      return current;
    })

    setDepartFlag(current => {
      if (current === 0) {
        current = 1;
      } else if (current === 1) {
        current = 0;
      }
      return current;
    })
  }

  const arriveClick = () => {
    setDepartFlag(current =>  {
      current = 0;
      return current;
    })

    setArriveFlag(current => {
      if (current === 0) {
        current = 1;
      } else if (current === 1) {
        current = 0;
      }
      return current;
    })
  }

  const stationChange = (e) => {
    const name = e.target.value;
    console.log(name);

    if (departFlag === 1) {
      setDepartStation(current => {
        current = name;
        if (arriveStation !== '밀양' && current !== '밀양') {
          setArriveStation(current => {
            current = '밀양';
            return current;
          })
        }
        return current;
      })

      setDepartFlag(current => {
        current = 0;
        return current;
      })
    }

    if (arriveFlag === 1) {
      setArriveStation(current => {
        current = name;
        if (departStation !== '밀양' && current !== '밀양') {
          setDepartStation(current => {
            current = '밀양';
            return current;
          })
        }
        return current;
      })

      setArriveFlag(current => {
        current = 0;
        return current;
      })
    }
  }

  const reverseStation = () => {
    const depart = departStation;
    const arrive = arriveStation;

    setDepartStation(current => {
      current = arrive;
      return current;
    })

    setArriveStation(current => {
      current = depart;
      return current;
    })
  }

  const StationSelect = () => {
    const selected = departFlag === 1 ? departStation : arriveStation;
    return (
      <select className="" onChange={e => stationChange(e)}>
        <optgroup label='자주 찾는 역'>
          {stations.popular.map((item, index) => {
            return <option key={index}>{item.name}</option>
          })}
        </optgroup>
        <optgroup label='역'>
          {stations.stations.map((item, index) => {
            return item.name === selected ? <option selected key={index}>{item.name}</option> : <option key={index}>{item.name}</option>
          })}
        </optgroup>
      </select>
    )
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO 페이지 전환 (Link를 Button에 달면 require이 안 먹음)
    navigate('/train-result');
  }

  return (
    <main>
      <div className="explain-container">
        <div className="explain">
          <p><span className="point">열차</span>와 <span className="point">버스</span></p>
          <p>시간표를</p>
          <p>한 눈에 확인해 보세요</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={e => onSubmit(e)}>
          <div className="date-input-container">
            <label htmlFor="">날짜</label>
            <input
            required
            min={today}
            max={timeCal()}
            id="date"
            type="date" />
          </div>
          <div className="time-input-container">
            <label htmlFor="">출발 시각</label>
            <p className='small-explain'><span>❗️</span>캠퍼스에서 출발할 경우 버스가 출발하는 시간을 선택해주세요.</p>
              <TimeSelect />
            </div>
          <div className="train-input-container">
            <div className="train-contents-container">
              <div className="depart-container" onClick={departClick}>
                <div>출발</div>
                <div className={departFlag === 1 ? 'focus train-select' : 'train-select'} id='depart'>{departStation}</div>
              </div>
              <div className="reverse-arrow-container" onClick={reverseStation}>
                ←→
              </div>
              <div className={arriveFlag === 1 ? 'focus arrive-container' : "arrive-container"} onClick={arriveClick}>
                <div>도착</div>
                <div className='train-select' id='arrive'>{arriveStation}</div>
              </div>
            </div>
            <div className="station-select-container">
                {departFlag === 1 ? <StationSelect /> : ''}
                {arriveFlag === 1 ? <StationSelect /> : ''}
              </div>
          </div>
          <div className="button-container">
              <Button type={"submit"} buttonsize={"search-button"} content={"시간표 조회하기"}/>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Train