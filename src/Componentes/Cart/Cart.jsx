import { useContext, useEffect } from "react"
import { CartContext } from "../CartContex/CartContex"
import { Link } from "react-router-dom"
import "./Cart.css"


const Cart = () => {

  const [cart,agregarCarrito ,estaEnCarrito,eliminarProducto,totalCompra,vaciarCarrito,cantTotal]= useContext(CartContext);

    return (
        !cart.length==0?
        <div className="container">
            
            <div className="row">
                <div className="col-md-12">
                    <h1 className="tituloCarrito">Carrito</h1>
                    <div id="carrito" className="table-responsive container">
                            
                            <table className="table" id="lista-compra">
                                <thead className="tablaTotales">
                                    <tr>
                                        <th scope="col" className="col-lg-4 col-sm-3 ">IMG</th>
                                        <th scope="col" className="col-lg-3 col-sm-3 ">NOMBRE</th>
                                        <th scope="col" className="col-lg-2 col-sm-2">PRECIO</th>
                                        <th scope="col" className="col-lg-2 col-sm-3">CANTIDAD </th>
                                        <th scope="col" className="col-lg-1  col-sm-1">#</th>
                                    </tr>
                                </thead>
                                
                            </table>
                            
                        </div>
                        {cart.map(product => (
                            
                        <div id="carrito" className="table-responsive container">
                            
                            <table className="table" id="lista-compra">
                                <thead classnName="tablaTotales">
                                    <tr key={product.item.id}>
                                        <th scope="col" className="col-lg-4 col-sm-3 "><img className="imgTotales" src={product.item.imagen} alt="" /></th>
                                        <th scope="col" className="col-lg-3 col-sm-3 nomrbeTotales">{product.item.nombre}</th>
                                        <th scope="col" className="col-lg-2 col-sm-2 precioCarrito">$ {product.item.precio}</th>
                                        <th scope="col" className="col-lg-2 col-sm-3 cantidadCarrito">Cantidad: {product.quantity} </th>
                                        <th scope="col" className="col-lg-1  col-sm-1"><button className="btnSumarRestar" onClick={()=> eliminarProducto(product.item.id)} > X </button></th>
                                    </tr>
                                </thead>
                                
                            </table>
                            
                        </div>
                                                       
                        ))}
                            <tr>
                                <th colspan="4" scope="col" className="text-right">
                                    <th scope="col">
                                        <p className="totalesFinal">{ totalCompra() !== 0 && `PRECIO TOTAL: $ ${totalCompra()}` }</p>
                                    </th>
                                </th>
                            </tr>
                </div>
                <div>
                <span><button className="botonVaciar" onClick={ vaciarCarrito } >Vaciar Carrito</button></span>
                <span><button className="botonVaciar" >Pagar</button></span>
                </div>
                
            </div>               
            
        </div>
        :
        
        <div className="titutoTodo">
            <h1 className="tituloCarrito2">Su carrito esta vacio !! </h1>
            <h2 className="tituloCarrito3">Conoce muchos mas Productos de <span className="colorPuro">Puro Monchis</span>  </h2>
            <Link to="/" className="botonHome"><button className="botonHome2">Conocer...</button></Link>
        </div>
    )
} 

export default Cart
