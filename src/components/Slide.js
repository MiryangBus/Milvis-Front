import React from 'react'
import Button from './Button'

const Slide = () => {
  return (
    <div className='slide-container'>
      <div className="slide">
        <ul>
          <li>
            <div className="slide-img"></div>
            <div className="slide-explain">
              <p>기차, 버스</p>
              <p className='point'>시간표 비교</p>
              <p>번거롭지 않으세요?</p>
            </div>
            <Button buttonsize={"long-button"} content={"시간표 바로가기 →"}/>
          </li>
          <li>
            <div className="slide-img"></div>
            <div className="slide-explain">
              <p>기차, 버스</p>
              <p className='point'>시간표 비교</p>
              <p>번거롭지 않으세요?</p>
            </div>
            <Button buttonsize={"long-button"} content={"시간표 바로가기 →"}/>
          </li>
          <li>
            <div className="slide-img"></div>
            <div className="slide-explain">
              <p>기차, 버스</p>
              <p className='point'>시간표 비교</p>
              <p>번거롭지 않으세요?</p>
            </div>
            <Button buttonsize={"long-button"} content={"시간표 바로가기 →"}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slide