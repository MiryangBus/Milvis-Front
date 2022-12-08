import React, { useEffect,useState,Link } from 'react'
import FooterMap from "../components/FooterMap";
import "./Map.css";
import Button from 'react-bootstrap/Button';
import MapResult from './MapResult';
/*global kakao*/ 


const Test = () => {
  const [lat, setLat] = useState(33.45103658098629);
  const [lng, setLng] = useState(126.57130488606091);
  const [lat2, setLat2] = useState(33.45326416780721);
  const [lng2, setLng2] = useState(126.57148752901962);
  const [lat3, setLat3] = useState(33.45322480184726);
  const [lng3, setLng3] = useState(126.5731441083554);

  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  var positions = [
    {
        title: '출발지', 
        latlng: new kakao.maps.LatLng(lat, lng)
    },
    {
        title: '꺾이는지점', 
        latlng: new kakao.maps.LatLng(lat2, lng2)
    },
    {
        title: '도착지', 
        latlng: new kakao.maps.LatLng(lat3, lng3)
    },

];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    }
    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
    var linePath = [
        new kakao.maps.LatLng(lat, lng),
        new kakao.maps.LatLng(lat2, lng2),
        new kakao.maps.LatLng(lat3, lng3) 
    ];

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
        path: linePath, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 10, // 선의 두께 입니다
        strokeColor: '#FFAE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다 
    polyline.setMap(map);  

},[]);   

  return (
    <div>
      <div className='map-explain'>길 그리기 테스트 <br />페이지 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
    </div>
  )
}

export default Test
