import React, { useEffect,useState,Link } from 'react'
import FooterMap from "../components/FooterMap";
import "./Map.css";
import Button from 'react-bootstrap/Button';
import MapResult from './MapResult';
import { useParams } from "react-router-dom";

/*global kakao*/ 

const PolyLineH = (props) => {
  const { lat, lng, showCate } = useParams();
  const [lat4, setLat4] = useState(33.45103658098629);
  const [lng4, setLng4] = useState(126.57130488606091);
  const [lat2, setLat2] = useState(33.45326416780721);
  const [lng2, setLng2] = useState(126.57148752901962);
  const [lat3, setLat3] = useState(33.45322480184726);
  const [lng3, setLng3] = useState(126.5731441083554);
  console.log(lat,lng,showCate)
  useEffect(()=>{
  const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

  const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  const positions = [
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
const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    }
    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
    const linePath = [
        new kakao.maps.LatLng(lat4, lng4),
        new kakao.maps.LatLng(lat2, lng2),
        new kakao.maps.LatLng(lat3, lng3) 
    ];

    // 지도에 표시할 선을 생성합니다
    const polyline = new kakao.maps.Polyline({
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
      <input
      onKeyUp={onChange}
      />
    </div>
  )
}

export default PolyLineH
