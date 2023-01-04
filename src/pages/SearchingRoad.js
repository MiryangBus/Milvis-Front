import React, { useEffect,useState,useRef } from 'react'
import FooterMap from "../components/FooterMap";
import "./Map.css";
import Button from 'react-bootstrap/Button';
import MapResult from './MapResult';
import { useParams } from "react-router-dom";
import { sendData } from "../API/useData";
import { TIME_TABLE_ORIGIN, MAP_URL } from "../API/API_URL";
import BusInfo from '../components/busFind/BusInfo';
import { useLocation } from 'react-router';

/*global kakao*/ 
const SearchingRoad = (props) => {
  const location = useLocation();
  // console.log(location.state.time)
  const { lat, lng, showCate } = useParams();
  const [state, setState] = useState({data : []})

  const onSubmit = async(e) => {
    // e.preventDefault();
    const data = {};
    data.depart_time = "2022-12-11T12:11:00";
    data.station_x = lat;
    data.station_y = lng;
    data.is_depart_from_campus = showCate
    const res = await sendData(MAP_URL, JSON.stringify(data));
    setState({ data: res.results})
    console.log("onSubmit가 동작합니다.")
  };
//
  console.log(state) 
 
  useEffect(()=>{
    console.log("useEffect가 동작합니다.") 
    onSubmit()
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = {  
        center: new kakao.maps.LatLng(35.45373762287106, 128.806692348998), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  //   const positions = [
  //     state.data.map((road, index) => {
  //     const {stations} = road;
  //     stations.map((station) => {
  //       const value = new kakao.maps.LatLng(station.x,station.y)
  //       return({latlng:value})
  //     })
  //   })
  // ]
  const positions = [];
  
  state.data.forEach((road) => {
    const {stations} = road;  //road.stations를 stations의 배열로 만듦 .
    console.log("1개의 노선 좌표를 찍습니다.")
    console.log(road)
    stations.forEach((station) => {
      const prop = {};
      const value = new kakao.maps.LatLng(station.x, station.y);
      prop.latlng = value;
      positions.push(prop);
      console.log(prop) 
    })

  })
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
        new kakao.maps.LatLng(35.450180777031726, 128.79987274871453),
        new kakao.maps.LatLng(35.45120243188731 , 128.79723027759243),
        new kakao.maps.LatLng(35.45201469173419 , 128.79714922310873) 
    ];

    // 지도에 표시할 선을 생성합니다
    const polyline = new kakao.maps.Polyline({
        path: linePath, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 9, // 선의 두께 입니다
        strokeColor: '#FFAE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });
    // 지도에 선을 표시합니다 
    polyline.setMap(map);  
},[]);   
  
  return (
    <div>
      <div className='map-explain'>test후 데이터 받고 결과 <br />보기 </div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
      {/* {
      state.data ? (
        state.data.map((road, index) => {
          const {stations} = road;
          console.log(road.line_id)
          stations.map((station) => {
            console.log(station.x);
            console.log(station.y);
          })
        })
      ): ("no")
      } */}
    </div>
  )
}
export default SearchingRoad
