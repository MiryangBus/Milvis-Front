import React, { useEffect,useState } from "react";

/*global kakao*/
function PolyLine() {
  let map = undefined;
  const [lat, setLat] = useState(33.45103658098629);
  const [lng, setLng] = useState(126.57130488606091);
  const [lat2, setLat2] = useState(33.45326416780721);
  const [lng2, setLng2] = useState(126.57148752901962);
  const [lat3, setLat3] = useState(33.45322480184726);
  const [lng3, setLng3] = useState(126.5731441083554);
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };

    map = new kakao.maps.Map(mapContainer, mapOption);
    polyline.setMap(map);
    
  }, []);

  const linePath = [
    new kakao.maps.LatLng(lat, lng),
    new kakao.maps.LatLng(lat2, lng2),
    new kakao.maps.LatLng(lat3, lng3) 
  ];

  const polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: "#FFAE00", // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: "solid", // 선의 스타일입니다
  });
 

  return (
    <div>
      <div className="map-explain">
        길 그리기 테스트 <br />
        페이지
      </div>
      <div id="map" style={{ width: "350px", height: "700px" }}></div>
    </div>
  );
}

export default PolyLine;
