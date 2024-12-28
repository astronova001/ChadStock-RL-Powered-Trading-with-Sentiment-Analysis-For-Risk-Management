import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
// import Navbar from "./components/navbar"
import Main_page from "./pages/Main_page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element = {<Registration/>}/>
        <Route path="/login" element = {<Login/>}/> 
        <Route path = "*" element = {<Navigate to={"/register"}/>}/>
        <Route path = "/" element = {<Main_page/>}/>    
      </Routes>
    </Router>
  )
}

export default App
