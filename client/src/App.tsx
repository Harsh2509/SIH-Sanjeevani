import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Details from "./components/Personal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BubbleGame from "./games/Bubble_Game/game"; // Corrected the import name
import GameHome from "./components/GameHome";
import Progress from "./components/Progress";
import Expert from "./components/child_details";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<Details />} />
            <Route path="/games" element={<GameHome />} />
            <Route path="/games/*" element={<Games />} />
            <Route path="/progress" element={<Progress />}></Route>
            <Route path="/child_expert" element={<Expert />}></Route>
          </Routes>
        </RecoilRoot>
      </>
    </Router>
  );
}

function Games() {
  return (
    <Routes>
      <Route path="/bubble-game" element={<BubbleGame />} />{" "}
      {/* Corrected the component name */}
    </Routes>
  );
}

export default App;
