import React from 'react'
import {Route, Routes, NavLink} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path= "/" element= {<Home/>}></Route>     
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/signup" element = {<Signup/>}></Route>
        </Routes>
    </>
  )
}

export default App