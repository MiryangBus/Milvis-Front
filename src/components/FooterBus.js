import React, { useState } from "react";

import "./FooterMain.css";

//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const FooterBus = (props) => {

  const [isOpen, setIsopen] = useState(true);
  const toStation = () => {
      setIsopen(true)
      props.setGoto("station")
  }
  const toCampus = () => {
     setIsopen(false)
     props.setGoto("campus")

}
  
  return (
    <div>
      {/* <div className={`footer-to-station ${isOpen ? "footer-line" : "footer-to-campus" }`}></div> */}
      <div className="footer-container">
        <div onClick={toStation} className={`footer-to-station ${isOpen ? "footer-line" : "" }`}>학교-&gt;밀양역 </div> {/*div span text차이? */}
        <div onClick={toCampus} className={`footer-to-campus ${isOpen ? "" : "footer-line" }`}>밀양역-&gt;학교 </div>
      </div>
    </div>

  )
}

export default FooterBus


