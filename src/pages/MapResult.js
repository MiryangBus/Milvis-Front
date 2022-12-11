import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./Map.css";
import { sendData } from "../API/useData";
import { TIME_TABLE_ORIGIN, MAP_URL } from "../API/API_URL";

/*global kakao*/
const MapResult = (props) => {
  const { lat, lng } = useParams();
  const markers = [];
  let map = undefined;

  const onSubmit = async(e) => {
    e.preventDefault();
    const data = {};
    data.departure_station_x = 33.450701;
    data.departure_station_y = 126.570667;
    data.destination_station_x = 33.45497066956483;
    data.destination_station_y = 126.57878781590678;
    const res = await sendData(MAP_URL, JSON.stringify(data));
    console.log(res);
  };

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3,
    };
    map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    const addMarker = (position) => {
      const marker = new kakao.maps.Marker({
        position: position,
      });
      
      marker.setMap(map);
      markers.push(marker);
      
      for (let i = 0; i < markers.length - 1; i++) {
        markers[i].setMap(null);
      }
    }

    const dragEnd = () => {
      const latlng = map.getCenter();
      addMarker(new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));
    }

    kakao.maps.event.addListener(map, "dragend", dragEnd);
    addMarker(new kakao.maps.LatLng(33.450701, 126.570667));
  }, []);

  return (
    <div>
      <div className="map-explain">
        출발 지점을 마커로 <br />
        찍어주세요
      </div>
      <div id="map-container">
        <div id="map" style={{ width: "350px", height: "700px" }}></div>
        <span id="pointer"></span>
      </div>
      <Button className="map-button" variant="primary" onClick={onSubmit}>
        확정
      </Button>
    </div>
  );
};

export default MapResult;
