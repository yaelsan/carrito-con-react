import { useContext, useEffect } from "react"
import { CartContext } from "../CartContex/CartContex"



const Cart = () => {

  const [cart,agregarCarrito,totalCompra,cantTotalObj,eliminarProducto,vaciarCarrito ]= useContext(CartContext);
console.log(cart);


    
    
    return (
        <div>
            <h1>Carrito</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Producto</h2>
                    <ul>
                        {cart.map(product => (
                            <>
                                <li key={product.item.id}>
                                        <img src={product.item.imagen} alt='foto de producto' className='w-25' />
                                    <span>Nombre: {product.item.nombre}</span>
                                    <span>Precio: {product.item.precio}</span>
                                    <span> Cantidad:  {product.quantity}</span>                           
                                </li>
                            </>                            
                        ))}
                    </ul>
                </div>
              
                
            </div>               
            
        </div>
    )
}

export default Cart
