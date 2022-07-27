import React from 'react'
import { Link } from 'react-router-dom'
import "./Botones.css"

const BotonesTerminarCompra = () => {
  return (
    <>
    <Link to="/cart"> <button className='botonFooter2'> Terminar Compra</button> </Link>
    </>
  )
}

export default BotonesTerminarCompra