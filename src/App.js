import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Main from "./pages/Main";
import Train from "./pages/Train"
import Map from "./pages/Map";
import Bus from "./pages/Bus";
import TrainResult from "./pages/TrainResult";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/train" element={<Train />}/>
          <Route exact path="/train/time-table" element={<TrainResult />} />
          <Route exact path="/map" element={<Map />}/>
          <Route exact path="/bus" element={<Bus />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
