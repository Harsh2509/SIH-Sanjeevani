import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signin from './components/Signin'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
