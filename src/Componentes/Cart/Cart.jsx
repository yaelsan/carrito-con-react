import { useContext, useEffect } from "react"
import { CartContext } from "../CartContex/CartContex"



const Cart = () => {

  const [cart,agregarCarrito ,estaEnCarrito,eliminarProducto,totalCompra,vaciarCarrito,cantTotal]= useContext(CartContext);

    return (
        <div>
            
            <div className="row">
                <div className="col-md-6">
                    <h1>Carrito</h1>
                    <ul>
                        {cart.map(product => (
                            <>
                                <li key={product.item.id}>
                                        <img src={product.item.imagen} alt='foto de producto' className='w-25' />
                                    <span>Nombre: {product.item.nombre}</span>
                                    <span>Precio: {product.item.precio}</span>
                                    <span> Cantidad:  {product.quantity}</span>    
                                    <button onClick={()=> eliminarProducto(product.item.id)} > X </button>                       
                                </li>
                            </>                            
                        ))}
                    </ul>
                </div>
                <div className="w-25">
                         {/* { totalCompra() !== 0 && `Precio Total: ${totalCompra()}` }   */}
                         
                </div>
                <div>
                { totalCompra() !== 0 && `Precio Total: ${totalCompra()}` }  
                </div>

              
              <button onClick={ vaciarCarrito } >Vaciar Carrito</button>
            </div>               
            
        </div>
    )
} 

export default Cart
