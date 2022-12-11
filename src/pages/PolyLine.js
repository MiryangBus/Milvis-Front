import React, { useEffect } from "react";

/*global kakao*/
function PolyLine() {
  let map = undefined;

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
    new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
    new kakao.maps.LatLng(33.452739313807456, 126.5709308145358),
    new kakao.maps.LatLng(33.45178067090639, 126.5726886938753) 
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
