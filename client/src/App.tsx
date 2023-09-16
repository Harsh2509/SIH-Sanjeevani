import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/signin" element={<Login/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
