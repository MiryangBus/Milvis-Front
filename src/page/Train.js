import React, { useState } from 'react'
import Button from '../components/Button'
import "./Train.css";

// ! DATE, TIME Input
// TODO 3. change input text

function Train() {  
  // * calculate min date ~ max date
  const today = new Date().toISOString().split("T")[0];
  const time = new Date().toISOString().split("T")[1];
  const timeCal = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const endDt = new Date(year, month, day + 31).toISOString().split("T")[0];

    return endDt;
  }

  const Select = () => {
    const times = [];

    for (let i=6; i<24; i++) {
      const c = String(i).padStart(2, '0');
      times.push(c);
    }
    console.log(times);

    return (
      <select id="time">
        <optgroup className='time-options'>
        {times.map((item) => {
          return <option>{item}</option>
        })}
        </optgroup>
      </select>
    )
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
        <form onSubmit={e=>e.preventDefault()}>
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
              <Select />
            </div>
          <div className="train-input-container">
            <div className="train-contents-container">
              <div className="depart-container">
                <div>출발</div>
                <div className='train-select' id='depart'>밀양</div>
              </div>
              <div className="arrow-contaienr">
                ←→
              </div>
              <div className="arrive-container">
                <div>도착</div>
                <div className='train-select' id='arrive'>부산</div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <Button buttonsize={"search-button"} content={"시간표 조회하기"}/>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Train