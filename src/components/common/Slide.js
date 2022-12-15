import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Button from './Button'
import "./Slide.css";

const IMAGE_LENGTH = 3;


const Slide = () => {
  const [currIndex, setCurrIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((curr) => {
        curr += 1;
        if (curr > IMAGE_LENGTH) {
          curr = 1;
        }
        calStyle(curr);

        return curr;
      })
      return () => clearInterval(timer);
    }, 4000);
  }, [])

  const clickPagination = (e) => {
    const {index} = e.target.dataset;
    setCurrIndex((curr) => {
      curr = Number(index);
      calStyle(curr);
      return curr;
    })
  }

  const calStyle = (curr) => {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const ul = document.querySelector('ul');
    switch(curr) {
      case 1:
        ul.setAttribute('style', `left: ${0}px`)
        break;
      case 2:
        ul.setAttribute('style', `left: ${-slideWidth}px`)
        break;
      case 3:
        ul.setAttribute('style', `left: ${-slideWidth * 2}px`)
        break;
      default:
        ul.setAttribute('style', `left: ${0}px`)
        break;
    }
  }

  // * Components
  const Card1Text = () => {
    return (
      <div className="slide-explain">
        <p>기차, 버스</p>
        <p className='point'>시간표 비교</p>
        <p>번거롭지 않으세요?</p>
        <p className="small-explain">열차와 버스 시간표를 한 번에 조회해보세요.</p>
      </div>
    )
  }

  const Card2Text = () => {
    return (
      <div className="slide-explain">
        <p className='point'>밀양시내,</p>
        <p>알려드릴게요</p>
        <p className='small-explain'>목적지에서<br />가장 가까운 정류장을 알려드려요.</p>
      </div>
    )
  }

  const Card3Text = () => {
    return (
      <div className="slide-explain">
        <p>기존 <span className='point'>버스 시간표</span></p>
        <p>를 찾고 계신가요?</p>
        <p className='small-explain'>더 직관적인<br/>시간표를 통해 한 눈에 확인해보세요.</p>
      </div>
    )
  }

  const Card = ({status}) => {
    return (
      <>
        <div className="slide-img"></div>
        {status === 1 ? <Card1Text /> : ''}
        {status === 2 ? <Card2Text /> : ''}
        {status === 3 ? <Card3Text /> : ''}
      </>
    )
  }

  const Pagination = () => {
    return (
      <div id="pagination">
        <div
        data-index = "1"
        className={currIndex === 1 ? 'select' : ''}
        onClick={clickPagination}></div>
        <div 
        data-index = "2"
        className={currIndex === 2 ? 'select' : ''}
        onClick={clickPagination}></div>
        <div
        data-index = "3"
        className={currIndex === 3 ? 'select' : ''}
        onClick={clickPagination}></div>
      </div>
    )
  }

  return (
    <div className="slide">
      <ul>
        <li className='slide-item item1'>
          <Card status={1}></Card>
          <div className="slide-button">
            <Link to="/train">
              <Button buttonsize={"long-button"} content={"시간표 비교 바로가기 →"}/>
            </Link>
          </div>
        </li>
        <li className='slide-item item2'>
          <Card status={2}></Card>
          <div className="slide-button">
            <Link to="/map">
              <Button buttonsize={"long-button"} content={"길찾기 바로가기 →"}/>
            </Link>
          </div>
        </li>
        <li className='slide-item item3'>
          <Card status={3}></Card>
          <div className="slide-button">
            <Link to="/bus">
              <Button buttonsize={"long-button"} content={"버스 시간표 확인하기 →"}/>
            </Link>
          </div>
        </li>
      </ul>
      <Pagination />
    </div>
  )
}

export default Slide