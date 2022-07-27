import React from 'react'
import { Link } from 'react-router-dom'
import "./Botones.css"

const BotonSeguirComprando = () => {
  return (
    <Link to="/"> <button className='botonFooter'>SeguirComprando</button> </Link>
  )
}

export default BotonSeguirComprando