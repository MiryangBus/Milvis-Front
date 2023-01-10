import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./Map.css";
import { MAP_URL } from "../../API/API_URL";
import { sendData } from "../../API/useData";
import FooterMap from "../../components/FooterMap";
import BusDateTime from "../../components/busFind/BusDateTime";
import Button from "../../components/common/Button";

const LAT_INIT_VALUE = 35.45373762287106;
const LNG_INIT_VALUE = 128.806692348998;

/*global kakao*/
const Map = () => {
  const navigate = useNavigate();
  const [showCate, setShowCate] = useState(true);
  const [lat, setLat] = useState(LAT_INIT_VALUE);
  const [lng, setLng] = useState(LNG_INIT_VALUE);

  const today = new Date().toISOString().slice(0, 10);
  const currHour = new Date().getHours();
  const currMin = String(new Date().getMinutes()).padStart(2, '0');
  const currTime = `${currHour}:${currMin}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(currTime);

  const markers = [];
  let map = undefined;

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    map = new kakao.maps.Map(mapContainer, mapOption);

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
      const lat = latlng.getLat();
      const lng = latlng.getLng();

      setLat(lat);
      setLng(lng);
      addMarker(new kakao.maps.LatLng(lat, lng));
    }

    addMarker(new kakao.maps.LatLng(lat, lng));
    kakao.maps.event.addListener(map, "dragend", dragEnd);
  }, []); // * End of useEffect()

  const onClick = async() => {
    const data = {};
    data.depart_time = `${date}T${time}:00`;
    data.station_x = lat;
    data.station_y = lng;
    data.is_depart_from_campus = showCate;

    const {results} = await sendData(MAP_URL, JSON.stringify(data));
    
    navigate(`/map/${lat}/${lng}/${showCate}`, {
      state: {
        data: results
      }
    })
  }

  return (
    <div>
      <div className="map-explain">
        출발 지점과 날짜를<br />
        설정해주세요.
      </div>
      <BusDateTime setDate={setDate} setTime={setTime} time={time}/> 
      {/* {console.log(date,"T",time,":00")} */}
      <div id="map-container">
        <div id="map" style={{ width: "350px", height: "700px" }}></div>
        <span id="pointer"></span>
      </div>
      <div className="button-container" onClick={onClick}>
        <Button
          buttonsize={"short-button"}
          content={"검색"}
          type={"submit"}
        ></Button>
      </div>
      <FooterMap showCate={showCate} setShowCate={setShowCate}></FooterMap>
    </div>
  );
};

export default Map;