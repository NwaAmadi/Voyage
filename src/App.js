import Home from "./Component/MainComponents/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Travel from "./Component/MainComponents/Travel";
import Explore from "./Component/MainComponents/Explore";
import Flights from "./Component/MainComponents/Flights";
import Hotels from "./Component/MainComponents/Hotels";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Travel" element={<Travel />}/>
          <Route path="/Explore" element={<Explore/>}/>
          <Route path="/Flights" element={<Flights/>}/>
          <Route path="/Hotels" element={<Hotels/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;