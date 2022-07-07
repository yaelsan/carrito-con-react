import CartWidget from '../IconCart/CartWidget'
import React from 'react'
import "./Nav.css"
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-warning">
  <div className="container-fluid">
   
    <button className="navbar-toggler btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink to="/"><img src="../img/logo-monchis.png" alt="logo" width="160px"/></NavLink>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navJsx">
        <li className="nav-item">
          <NavLink to="/categoria/papaFritas" className={({isActive})=> isActive ? "estaActivadoPapas" : "noActivado"} > Papas Fritas </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categoria/palitos" className={({isActive})=> isActive ? "estaActivadoPalitos" : "noActivado"} > Palitos Salados </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoria/chisitos" className={({isActive})=> isActive ? "estaActivadoChisitos" : "noActivado"} > Chisitos </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoria/gaseosas" className={({isActive})=> isActive ? "estaActivadoRefrescos" : "noActivado"} > Refrescos </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoria/golosinas" className={({isActive})=> isActive ? "estaActivadoGolosinas" : "noActivado"} > Golosinas </NavLink>
        </li>
      </ul>
     <Link to="/cart"><CartWidget/></Link>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar




