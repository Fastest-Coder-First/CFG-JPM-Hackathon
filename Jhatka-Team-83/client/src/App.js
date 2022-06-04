import React from 'react'
import {Route, Routes, NavLink} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink to="">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="#features">Features</Nav.Link>
            <Nav.Link to="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link to="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} to="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        <Routes>
            <Route path= "/" element= {<Home/>}></Route>     
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/signup" element = {<Signup/>}></Route>
        </Routes>
    </>
  )
}

export default App