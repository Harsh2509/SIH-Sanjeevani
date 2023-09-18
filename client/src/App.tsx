import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import IQ_Page from './components/IQ_Page'
import Details from './components/Personal'

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
          <Route path="/login" element={<Login/>} />
          <Route path="/iqpage" element={<IQ_Page/>} />
          <Route path="/details" element={<Details/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
