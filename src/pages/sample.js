import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

import "./Map.css";
import MapResult from "./MapResult";
import FooterMap from "../components/FooterMap";
import BusInfo from "../components/busFind/BusInfo";
import { sendData } from "../API/useData";
import { useLocation } from "react-router";
import { TIME_TABLE_ORIGIN, MAP_URL } from "../API/API_URL";

const IMAGE_SRC = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

/*global kakao*/
const SearchingRoad = (props) => {
  let stationInfo;
  let mapContainer, map;

  const onSubmit = async () => {
    const data = {};

    data.depart_time = "2022-12-11T12:11:00";
    data.station_x = lat;
    data.station_y = lng;
    data.is_depart_from_campus = showCate;

    const res = await sendData(MAP_URL, JSON.stringify(data));
    return res;
  };

  useEffect(() => {
    stationInfo = onSubmit();
    const mapOption = {
      center: new kakao.maps.LatLng(35.45373762287106, 128.806692348998), 
      level: 4,
    };
    mapContainer = document.getElementById("map"); 
    map = new kakao.maps.Map(mapContainer, mapOption); 
  }, []);

  const { lat, lng, showCate } = useParams();
  let [pagination, setPagination] = useState(1);
  // const positions = [];
  // const lines = [];

  // state.data.forEach((road) => {
  //   const { stations } = road;
  //   const marker = [];

  //   stations.forEach((station) => {
  //     const value = new kakao.maps.LatLng(station.x, station.y);
  //     marker.push(value);
  //   })
  //   positions.push(marker);
  // })


  const setMarker = (position) => {
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(IMAGE_SRC, imageSize);
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: position, // 마커를 표시할 위치
      image: markerImage, // 마커 이미지
    });
  }


  const markers = [
    [{}, {}, {}],
    [],
    []
  ];

  const infoModal = () => {
    const currPageMarkers = markers[pagination];

    for (let marker of currPageMarkers) {
      setMarker(marker.latlng);
    }
  }

  return (
    <div>
      <div className="map-explain">
        test후 데이터 받고 결과 <br />
        보기{" "}
      </div>
      <div id="map" style={{ width: "350px", height: "700px" }}></div>
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
  );
};
export default SearchingRoad;
