import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';

import "./busFind/Map.css";
const IMAGE_SRC = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

/*global kakao*/ 
const SearchingRoad = (props) => {
  const { state } = useLocation();
  const { lat, lng } = useParams();
  const [pagination, setPagination] = useState(2);
  let map = undefined;

  useEffect(() => {
    makeKaKaoMap();
    if (map) {
      initMap();
    }
  })

  function makeKaKaoMap() {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 4,
    };
    map = new kakao.maps.Map(mapContainer, mapOption);
  }
  function initMap() {
    const currBusInfo = state.data[pagination];

    if (currBusInfo) {
      setMapElement(currBusInfo)
    }
  }

  function setMapElement(currBusInfo) {
    const { stations } = currBusInfo;
    const markers = [];
    const lines = [];

    stations.forEach((station) => {
      const value = new kakao.maps.LatLng(station.x, station.y);
      markers.push({title: station.name, latlng: value});
      lines.push(value);
    })

    setMarkers(markers);
    setLines(lines);
  }

  function setMarkers(markers) {
    const imageSize = new kakao.maps.Size(24, 35);    
    const markerImage = new kakao.maps.MarkerImage(IMAGE_SRC, imageSize); 
    
    for (let i = 0; i < markers.length; i ++) {
      const marker = new kakao.maps.Marker({
        map: map, 
        position: markers[i].latlng, 
        title : markers[i].title, 
        image : markerImage
      });
    }
  }

  function setLines(lines) {
    const polyline = new kakao.maps.Polyline({
      path: lines, 
      strokeWeight: 5, 
      strokeColor: '#FFAE00', 
      strokeOpacity: 0.7, 
      strokeStyle: 'solid' 
    });
    polyline.setMap(map);
  }

  return (
    <div>
      <div id="map" style={{width:"350px", height:"700px"}}></div> 
    </div>
  )
}
export default SearchingRoad
