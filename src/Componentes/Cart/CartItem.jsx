import React, { useContext } from 'react'
import { CartContext } from '../CartContex/CartContex';
 
const CartItem = () => {
    
    const [cart,addToCart ,isInCart,deletProduct,totalBuy,emptyCart,quantityTtotal]= useContext(CartContext);

  return (
    cart.map(product => (
    <div key={product.item.id} id="carrito" className="table-responsive container">
                            
        <table className="table" id="lista-compra">
            <thead className="tablaTotales">
                <tr>
                    <th scope="col" className="col-lg-4 col-sm-3 "><img className="imgTotales" src={product.item.imagen} alt="" /></th>
                    <th scope="col" className="col-lg-3 col-sm-3 nomrbeTotales">{product.item.nombre}</th>
                    <th scope="col" className="col-lg-2 col-sm-2 precioCarrito">$ {product.item.precio}</th>
                    <th scope="col" className="col-lg-2 col-sm-3 cantidadCarrito">Cantidad: {product.quantity} </th>
                    <th scope="col" className="col-lg-1  col-sm-1"><button className="btnSumarRestar" onClick={()=>deletProduct(product.item.id)} > X </button></th>
                </tr>
            </thead>
        </table>
         
    </div>))
  )
}

export default CartItem