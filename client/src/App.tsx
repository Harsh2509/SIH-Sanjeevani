import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Details from "./components/Personal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import BubbleGame from "./games/Bubble_Game/game"; // Corrected the import name
import GameHome from "./components/GameHome";
import Progress from "./components/Progress";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
          <Route path="/games" element={<GameHome />} />
          <Route path="/games/*" element={<Games />} />
          <Route path="/progress" element={<Progress />}></Route>
        </Routes>
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
