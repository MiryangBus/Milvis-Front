import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/common/Header";
import Main from "./page/Main";
import Train from "./page/Train"
import Map from "./page/Map";
import Bus from "./page/Bus";
import TrainResult from "./page/TrainResult";
import "./App.css";

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
          <Route exact path="/bus/:date" element={<Bus />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
