import React from 'react'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Errorpage from './components/Error404';

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path= "/" element= {<Home/>}></Route>     
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/signup" element = {<Signup/>}></Route>
            <Route path = "*" element = {<Errorpage/>}></Route>
        </Routes>
    </>
  )
}

export default App