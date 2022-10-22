import React from 'react'
import './TrainResult.css';
import Button from "../components/Button";
import { Link } from 'react-router-dom';

// TODO
// 타임 테이블 어떻게 만들지 고민하기 

// TODO 
// 버스 & 기차 의 타입과 시간을 합쳐서 정렬해놓은 새 object 만들기
// 아님 이것도 백엔드에서 가능한가

function TrainResult() {
    const data = {
        "type": "depart",
        "departStation": "밀양",
        "arriveStation": "부산",
        "date": "2022-10-10",
        "time": "14",
        "times" : [
            {"type" : "bus", "name" : "아리랑04", "depart" : "14 : 05", "arrive" : "14 : 17"},
            {"type" : "train", "name" : "srt", "depart" : "14 : 08", "arrive" : "14 : 40"},
            {"type" : "train", "name" : "ktx", "depart" : "14 : 30", "arrive" : "15 : 17"},
            {"type" : "bus", "name" : "아리랑04", "depart" : "14 : 44", "arrive" : "15 : 00"},
            {"type" : "train", "name" : "무궁화", "depart" : "14 : 55", "arrive" : "15 : 32"},
        ]
    };
    
    const timeInterval = [];
    const date = data.date.split("-");

    // * Card Component
    const Card = ({name, depart, arrive}) => {
        return (
            <div className="card-container">
                <div className="card-name-item">{name}</div>
                <div className="card-time-item"><span>{depart}</span> - {arrive}</div>
            </div>
        )
    }

    // * List Component - Bus -> Train
    const DepartTimeList = ({order, type, name, depart, arrive}) => {
        return (
            <li className={setMarginBottom(order)}>
                <div className="left-item">{type === "bus" ? <Card name={name} depart={depart} arrive={arrive} /> : null }</div>
                <div className="center-item"></div>
                <div className="right-item">{type === "train" ? <Card name={name} depart={depart} arrive={arrive} /> : null }</div>
            </li>
        )
    }

    // * List Component - Train -> Bus
    const ArriveTimeList = ({type, name, depart, arrive}) => {
        return (
            <li>
                <div className="left-item">{type === "train" ? <Card name={name} depart={depart} arrive={arrive} /> : null }</div>
                <div className="center-item"></div>
                <div className="right-item">{type === "bus" ? <Card name={name} depart={depart} arrive={arrive} /> : null }</div>
            </li>
        )
    }

    const calInterval = () => {
        // * 0. 출발시간을 기준으로 margin-bottom 을 가져와서 각 값을 재설정 해준다. 
        // * 1. li 컴포넌트에 클래스로 값을 달리 해준다 -> 몇 번 째인지 어케 알지

        const departTimes = [];

        for (let {depart} of data.times) {
            const minute = depart.split(" : ")[1];
            departTimes.push(Number(minute));
        }

        for (let i=0; i<departTimes.length-1; i++) {
            timeInterval.push(departTimes[i + 1] - departTimes[i]);
        }
        
    }

    const setMarginBottom = (order) => {
        let margin = '';
        console.log(timeInterval[order]);

        if (timeInterval[order] <= 10) {
            margin = 'small-margin';
        } else if (timeInterval[order] <= 20) {
            margin = 'small-medium-margin';
        } else if (timeInterval[order] <= 30) {
            margin = 'medium-margin';
        } else if (timeInterval[order] <= 40) {
            margin = 'medium-large-margin'
        } else {
            margin = 'large-margin'
        }

        return margin;
    }

    calInterval();

  return (
    <main>
        <div className='info-container'>
            <h1>
                {data.departStation} → {data.arriveStation}
            </h1>
            <p>{date[0]}년 {date[1]}월 {date[2]}일</p>
            <p>{data.time}-{Number(data.time) + 1}시 출발</p>
            <Link to="/train" style={{width: "80%"}}>
                <Button 
                    buttonsize={"search-button"}
                    content = "← 다시 조회하기"
                />
            </Link>
        </div>
        <div className='time-table-container'>
            {/* time table - header */}
            <div className="header-wrap">
                <div className='table-header'>
                    <div className="left">{data.type === "depart" ? '버스' : '기차'}</div>
                    <div className="right">{data.type === "depart" ? '기차' : '버스'}</div>
                </div>
            </div>
            {/* time table - times */}
            <div className="time-table">
                <div className="notice-time">
                    <div className="circle-time">{Number(data.time)}</div>
                </div>
                <ul className="times-container">
                    <div className="center-line"></div>
                    {data.type === "depart" ? data.times.map((item, index) => {
                        return <DepartTimeList key={index} order={index} type={item.type} name={item.name} depart={item.depart} arrive={item.arrive}/>
                    }) : data.times.map((item, index) => {
                        return <ArriveTimeList key={index} type={item.type} name={item.name} depart={item.depart} arrive={item.arrive}/>
                    })}
                </ul>
                <div className="notice-time">
                    <div className="circle-time">{Number(data.time) + 1}</div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default TrainResult