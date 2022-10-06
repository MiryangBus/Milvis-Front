import React, { useEffect } from 'react'
import Header from "../components/Header";
import "./Map.css";
import Button from 'react-bootstrap/Button';
/*global kakao*/ 
const Map = () => {
  
  useEffect(()=>{
    
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    }, [])

  return (
    <div>
      <div className='map-explain'>출발 지점을 마커로 <br />찍어주세요 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
      <Button className="map-button" variant="primary">   다음  </Button>{' '}
    </div>
  )
}

export default Map