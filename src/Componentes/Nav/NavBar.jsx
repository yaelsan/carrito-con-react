import CartWidget from '../IconCart/CartWidget'


import React from 'react'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark border-bottom border-warning">
  <div class="container-fluid">
   
    <button class="navbar-toggler btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img src="../img/logo-monchis.png" alt="logo" width="160px"/></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
     
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navJsx">
        <li class="nav-item">
          <a class="nav-link" href="#">PapasFritas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Palitos Salados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chisitos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Refrescos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Golosinas</a>
        </li>
      </ul>
     
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default NavBar




