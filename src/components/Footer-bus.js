import React from 'react'
import "./Footer-main.css";

//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const FooterBus = () => {
  return (
    <div className='footer-bus'>
      <div>학교-&gt;밀양역 </div> {/*div span text차이? */}
      <div className='footer-space'>밀양역-&gt;학교 </div>
    </div>


  )
}

export default FooterBus
