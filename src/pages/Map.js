import React, { useEffect, useState, Link } from "react";
import Button from "react-bootstrap/Button";

import "./Map.css";
import FooterMap from "../components/FooterMap";
import MapResult from "./MapResult";

/*global kakao*/
const Map = () => {
  const [lat, setLat] = useState(33.450701);
  const [lng, setLng] = useState(126.570667);
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

      setLat(latlng.getLat());
      setLng(latlng.getLng());
      addMarker(new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));
    }

    addMarker(new kakao.maps.LatLng(lat, lng));
    kakao.maps.event.addListener(map, "dragend", dragEnd);
  }, []);

  // * redering
  return (
    <div>
      <div className="map-explain">
        출발 지점을<br />
        설정해주세요.{" "}
      </div>
      <div id="map-container">
        <div id="map" style={{ width: "350px", height: "700px" }}></div>
        <span id="pointer"></span>
      </div>
      <a href={`map/${lat}/${lng}`}>
        <Button className="map-button" variant="primary">
          다음
        </Button>
      </a>
      <FooterMap lat={lat} lng={lng}></FooterMap>
    </div>
  );
};

export default Map;
