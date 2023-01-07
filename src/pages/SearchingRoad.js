import React, { useEffect,useState,useRef } from 'react'
import "./busFind/Map.css";
import { useParams } from "react-router-dom";
import { sendData } from "../API/useData";
import { TIME_TABLE_ORIGIN, MAP_URL } from "../API/API_URL";
import { useLocation } from 'react-router';
const IMAGE_SRC = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

/*global kakao*/ 
const SearchingRoad = (props) => {
  const location = useLocation();
  const { lat, lng, showCate } = useParams(); 
  const [state, setState] = useState({data : []})
  let [pagination, setPagination] = useState(1);
  let [currPageMarkers, setCurrPageMarkers] = useState(1);
  console.log(location.state.date,"T",location.state.time,":00")
  
  const onSubmit = async(e) => {
    // e.preventDefault(); 
    const data = {};
    data.depart_time = "2022-12-11T12:11:00";
    data.station_x = lat;
    data.station_y = lng;
    data.is_depart_from_campus = showCate
    const res = await sendData(MAP_URL, JSON.stringify(data));
    setState({ data: res.results}) 
  };

  useEffect(()=>{
    onSubmit()    
  },[]);    

  const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
  mapOption = {  
      center: new kakao.maps.LatLng(35.45373762287106, 128.806692348998), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
  };
  const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  const setMarker = (position,line) => {
    for (var i = 0; i < position.length; i ++) {
      const imageSize = new kakao.maps.Size(24, 35); 
      const markerImage = new kakao.maps.MarkerImage(IMAGE_SRC, imageSize); 
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: position[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
      });
    }  
    const polyline = new kakao.maps.Polyline({
      path: line, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 9, // 선의 두께 입니다
      strokeColor: '#FFAE00', // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid' // 선의 스타일입니다
    });
    polyline.setMap(map);   
  }
  const positions2 = [];
  const lines = []

  state.data.forEach((road) => {
    const {stations} = road;  //road.stations를 stations의 배열로 만듦
    positions2.push(stations) 
  })

  const positions3 = []//현재 노선의 마커 카카오좌표
  // console.log(positions2[pagination])
  const infoModal = () => {
    positions2[pagination].forEach((tt)=>{
      console.log(tt.x,tt.y)
      const prop = {};
      const value = new kakao.maps.LatLng(tt.x, tt.y);
      prop.latlng = value;
      positions3.push(prop);
      lines.push(value);
      setMarker(positions3,lines);
    }) 
  } 

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
      {
        infoModal()
      }
    </div>
  )
}
export default SearchingRoad
