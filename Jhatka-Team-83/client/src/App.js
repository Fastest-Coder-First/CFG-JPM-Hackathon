import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'

import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin"
import Home from "./components/Home";
import Profile from "./components/Profile"
import EventsPage from "./components/EventsPage/EventsPage"
import Addevents from "./components/AddEvents/Addevents"
import Errorpage from './components/Error404';
import AddSkills from './components/AddSkills/AddSkills';

const App = () => {
  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink className="navbar-brand" to="/">Jhatka</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to='/profile'>Profile</NavLink>
          <NavLink className="nav-link" to="/events">Events</NavLink>
          <NavLink className="nav-link" to="/addevents">Add Events</NavLink>
        </Nav>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
          <NavLink className="nav-link" to='/signin'>Sign In</NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
        <Route path= "/" element= {<Home/>}></Route>     
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
        <Route path = "/skills" element = {<AddSkills/>}></Route>
        <Route path= "/profile" element={<Profile /> } />
        <Route path ="/events" element={<EventsPage />} />
        <Route path="/addevents" element={<Addevents />} />
        <Route path = "*" element = {<Errorpage/>}></Route>
      </Routes>
    </>
  )
}

export default App