import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Map.css";
import FooterMap from "../components/FooterMap";
import { Link } from "react-router-dom";
import { timeCalculator } from "../components/utils/TimeCalculator";
import BusDateTime from "../components/busFind/BusDateTime";
import { ConeStriped } from "react-bootstrap-icons";

/*global kakao*/
const Map = () => {
  const [showCate, setShowCate] = useState(true);
  const [lat, setLat] = useState(35.45373762287106);
  const [lng, setLng] = useState(128.806692348998);
  const markers = [];
  let map = undefined;
  const times = timeCalculator.makeTimeOptions();
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [time, setTime] = useState();

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
      setLat(latlng.getLat());
      setLng(latlng.getLng());
      addMarker(new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));
    }

    addMarker(new kakao.maps.LatLng(lat, lng));
    kakao.maps.event.addListener(map, "dragend", dragEnd);
  }, []);

  return (
    <div>
      {console.log(lat,lng)}
      <div className="map-explain">
        출발 지점과 날짜를<br />
        설정해주세요.{" "}
      </div>
      <BusDateTime setDate={setDate} setTime={setTime}/> 
      {console.log(date,"T",time,":00")}
      <div id="map-container">
        <div id="map" style={{ width: "350px", height: "700px" }}></div>
        <span id="pointer"></span>
      </div>
      <Link to={`/test/${lat}/${lng}/${showCate}`} state={{ date:date, time:time}}>
        <Button className="map-button" variant="primary" >
          다음
        </Button>
      </Link>  
      <FooterMap showCate={showCate} setShowCate={setShowCate}></FooterMap>
    </div>
  );
};

export default Map;