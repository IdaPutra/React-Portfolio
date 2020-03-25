import React from "react";
import "../pages/style.css";
import { Link } from 'react-router-dom';




export function Navbar() {
  return (
    
<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-" id="nav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src={require('../images/main.png')} alt="" style={{height:"7rem"}} id="logo"></img></a>
 
    <form class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="link">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navA"><Link className="nav-link" to="/">Home</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA"><Link className="nav-link" to="/about">About</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA"><Link className="nav-link" to="/dashboard">Portfolio</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA"><Link className="nav-link" to="/contact">Contact</Link></a>
      </li>
    </ul>
    </form>
  
</nav>
</div>





  );
}

