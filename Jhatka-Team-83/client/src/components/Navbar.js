import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-5">
        <NavLink className="navbar-brand" to="/">MERN
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Log Out</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Log Out</NavLink>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar
