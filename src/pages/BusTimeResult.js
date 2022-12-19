import React, { useEffect} from 'react'

import "./Map.css";
import "./BusTimeResult.css";

/*global kakao*/ 


const BusTimeResult = () => {
  useEffect(()=>{

    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption); 
    map.setDraggable(false); 
    map.setZoomable(false);  

    // 커스텀 오버레이 엘리먼트를 만들고, 컨텐츠를 추가합니다
    const content = document.createElement('div');
    content.className = 'overlay';
    content.innerHTML = 
    '버스시간표<br/>'+
    '<div class="bus-time">oo 버스 정류장</div>' +
    '<div class="arrow">-></div>' +
    '<div class="bus-time2">xx 버스 정류장</div>' +
    '<div  class="time"><br/>17</div><div class="time2">분</div>';


    // 커스텀 오버레이를 생성합니다 
    const customoverlay = new kakao.maps.CustomOverlay({
        map: map,
        content: content,
        position: new kakao.maps.LatLng(33.450701, 126.570667)
    });
},[]);   

  return (
    <div>
      <div className='map-explain'>길 그리기 테스트 <br />페이지 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
    </div>
  )
}

export default BusTimeResult
