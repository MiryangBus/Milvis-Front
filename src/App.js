import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./page/Main";
import Train from "./page/Train"
import Map from "./page/Map";
import Bus from "./page/Bus";
import TrainResult from "./page/TrainResult";
import MapResult from "./page/MapResult";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/train" element={<Train />}/>
          <Route exact path="/map" element={<Map />}/>
          <Route exact path="/train-result" element={<TrainResult />} />
          <Route exact path="/map-result/:lat/:lng" element={<MapResult />} />
          <Route exact path="/bus/:date" element={<Bus />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
