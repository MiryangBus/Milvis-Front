import React, { useEffect } from 'react'
import Header from "../components/common/Header";
import "./Map.css";
import Button from 'react-bootstrap/Button';
/*global kakao*/ 
const Map = () => {
  
  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
//////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(map, 'dragend', function() {       
    var latlng = map.getCenter(); 
    //console.log(level,latlng.getLat(),latlng.getLng()) 
    addMarker(new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));        
  });
  // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
  var markers = [];
  addMarker(new kakao.maps.LatLng(33.450701, 126.570667)); //현위치

  function addMarker(position) {
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: position
    });
    console.log(position)
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
    console.log(markers)
    for(var i = 0; i < markers.length-1; i++){
      markers[i].setMap(null);
      }
}



  },[]);   
    
  return (
    <div>
      <div className='map-explain'>출발 지점을 마커로 <br />찍어주세요 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
      <Button className="map-button" variant="primary">   다음  </Button>{' '}
    </div>
  )
}

export default Map