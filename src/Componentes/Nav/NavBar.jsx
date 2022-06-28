import CartWidget from '../IconCart/CartWidget'
import React from 'react'
import "./Nav.css"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark border-bottom border-warning">
  <div className="container-fluid">
   
    <button className="navbar-toggler btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src="../img/logo-monchis.png" alt="logo" width="160px"/></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navJsx">
        <li className="nav-item">
          <a className="nav-link" href="#">Papas Fritas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Palitos Salados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Chisitos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Refrescos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Golosinas</a>
        </li>
      </ul>
     
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar




