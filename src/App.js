import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import Train from "./pages/train/Train"
import TrainResult from "./pages/train/TrainResult";
import Map from "./pages/Map";
import Bus from "./pages/Bus";
import MapResult from "./pages/MapResult";
import SearchingRoad from "./pages/SearchingRoad";
import BusTimeResult from "./pages/BusTimeResult";
import PolyLineH from "./pages/PolyLineH";



import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/train" element={<Train />}/>
          <Route exact path="/train/time-table" element={<TrainResult />} />
          <Route exact path="/map" element={<Map />}/>
          <Route exact path="/map-result/:lat/:lng/:showCate" element={<PolyLineH />}/>  {/*기능2 길그려주기 페이지-수연작성*/}
          {/* <Route exact path="/map/:lat/:lng" element={<MapResult />} />안쓴다..왜냐하면..목적지고정 */}
          <Route exact path="/test/:lat/:lng/:showCate" element={<SearchingRoad />} />
          <Route exact path="/BusTimeResult" element={<BusTimeResult />} /> {/*기능2 결과페이지*/}
          <Route exact path="/bus/:date" element={<Bus />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
