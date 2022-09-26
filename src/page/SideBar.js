import React from 'react'
import "./SideBar.css";
const SideBar = () => {
  return (
    <sidebar-main>    {/*SideBar.css의 classname인 sidebar-main*/}
        <div>시간표 비교</div>
        <div>길찾기</div>
        <div>기존 시간표</div>
    </sidebar-main>
  )
}

export default SideBar;

