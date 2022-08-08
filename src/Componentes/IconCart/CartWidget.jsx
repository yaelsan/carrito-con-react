import React, { useContext } from 'react'
import { CartContext } from '../CartContex/CartContex';
import './CartWidget.css'

export default function CartWidget() {
  const [cart,addToCart ,isInCart,deletProduct,totalBuy,emptyCart,quantityTtotal]= useContext(CartContext);
  return (
    
     !cart.length == 0?
     <>
    <ul className="d-flex navbar-nav ">
      <li  className="numerito">
        <img src="../img/logo-cart.png" alt="cart-logo" width="120px"/>
      </li>
      <p className='totalArticulos'>{ quantityTtotal() !== 0 && quantityTtotal() }</p>
    </ul>
    </>
    :
    <>
    <ul className="d-flex navbar-nav ">
      <li  className="numerito">
        <img src="../img/logo-cart.png" alt="cart-logo" width="120px"/>
      </li>
    </ul>
    </>
    
  )
}
