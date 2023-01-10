import React from "react";
import "./FooterMain.css";
//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const FooterMap = (props) => {
  return (
    <div>
      <div className="footer-map">
        <div className="font-space" style={{fontSize:"10px"}}>출발지</div>
          <div className="font-space"><div className={`${props.showCate?'font-color-gray':''}`} >{props.showCate === true ? "밀양캠퍼스" : "{props.lat}{props.lng}"}</div></div>
        <div className="center-line"></div>
        <img  src="/picture/up-down3.png" onClick={()=>props.setShowCate(!props.showCate)} className={`arrow ${props.showCate?'':'rotate'}`} alt={''} ></img> 
        <div className="font-space" style={{fontSize:"10px"}}>도착지</div> 
          <div className="font-space"><div className={`${props.showCate?'':'font-color-gray'}`} >{props.showCate === true ? "{props.lat}{props.lng}" : "밀양캠퍼스"}</div></div>
      </div>

    </div>

  )
}

export default FooterMap;
//처음에 false 라서 rotate로 간다
//"is_depart_from_campus": "TRUE" 캠퍼스로부터 출발이 맞다 캠퍼스 출발은 true이다