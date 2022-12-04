import React, { useState } from "react";
import "./FooterMain.css";

//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const FooterMap = (props) => {
  
  return (
    <div>
      {/* <div className={`footer-to-station ${isOpen ? "footer-line" : "footer-to-campus" }`}></div> */}
      <div className="footer-map">
        <div >
            출발지
            <div>
                {props.lat}
                <br></br>
                {props.lng}
            </div>    
        </div> {/*div span text차이? */}
      </div>
    </div>

  )
}

export default FooterMap


