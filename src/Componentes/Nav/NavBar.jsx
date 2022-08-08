import CartWidget from '../IconCart/CartWidget'
import "./Nav.css"
import { Link, NavLink } from 'react-router-dom'

function NavBar() {

 

  return (
  <nav className="navbar navbar-expand-lg bg-dark border-bottom border-warning">
    <div className="container-fluid">
      <button className="navbar-toggler btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">+</span>
      </button>
      <div className=" collapse navbar-collapse container-fluid" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 hola">
          <li className="nav-item">
            <NavLink to="/categoria/papaFritas" className={({isActive})=> isActive ? "estaActivado" : "noActivado"} > Papas Fritas </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categoria/palitos" className={({isActive})=> isActive ? "estaActivado" : "noActivado"} > Palitos Salados </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categoria/chisitos" className={({isActive})=> isActive ? "estaActivado" : "noActivado"} > Chizitos </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categoria/gaseosas" className={({isActive})=> isActive ? "estaActivado" : "noActivado"} > Bebidas </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categoria/golosinas" className={({isActive})=> isActive ? "estaActivado" : "noActivado"} > Golosinas </NavLink>
          </li>
        </ul>
        <Link to="/cart">
        <CartWidget/> 
        </Link>
      </div>
    </div> 
  </nav>
  )
}

export default NavBar





