import React from 'react'
import "./Footer-main.css";
import Nav from 'react-bootstrap/Nav';

//Footer-main = Footer-main, Footer-bus 이므로 Footer.css로 합치고
//안에 class로 쪼개기.
//수연이는 .안씀 나는 .쓰고 className으로
const FooterBus = () => {
  return (
    <>
      <Nav className='footer-bus' variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </>

  )
}

export default FooterBus



// <div >밀양역-&gt;학교 </div> {/*div span text차이? */}
// <div className='footer-space'>학교-&gt;밀양역 </div>