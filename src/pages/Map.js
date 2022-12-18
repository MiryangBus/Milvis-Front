import React, { useEffect, useState, Link } from "react";
import Button from "react-bootstrap/Button";
import "./Map.css";
import FooterMap from "../components/FooterMap";
import MapResult from "./MapResult";
import { sendData } from "../API/useData";
import { TIME_TABLE_ORIGIN, MAP_URL } from "../API/API_URL";

/*global kakao*/
const Map = () => {
  const [showCate, setShowCate] = useState(true);
  const [state, setState] = useState({data : {}})
  const [lat, setLat] = useState(35.45373762287106);
  const [lng, setLng] = useState(128.806692348998);
  const markers = [];
  let map = undefined;

  const onSubmit = async(e) => {
    e.preventDefault();
    const data = {};
    data.depart_time = "2022-12-11T12:11:00";
    data.station_x = lat;
    data.station_y = lng;
    console.log(showCate)
    data.is_depart_from_campus = showCate
    const res = await sendData(MAP_URL, JSON.stringify(data));
    setState({ data: res})
  };
  console.log(state.data.results);
  
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
        출발 지점을<br />
        설정해주세요.{" "}
      </div>
      <div id="map-container">
        <div id="map" style={{ width: "350px", height: "700px" }}></div>
        <span id="pointer"></span>
      </div>
      <a href={`map-result/${lat}/${lng}`}>
        <Button onClick={onSubmit} className="map-button" variant="primary" >
          다음
        </Button>
      </a>
      <FooterMap showCate={showCate} setShowCate={setShowCate}></FooterMap>
    </div>
  );
};

export default Map;

