import { useContext, useState } from "react"
import { CartContext } from "../CartContex/CartContex"
import { Link } from "react-router-dom"
import "./Cart.css"
import CartItem from "./CartItem"
import {addDoc, collection, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch,} from 'firebase/firestore'

const Cart = () => {

  const [id, setId] = useState()
  const [cart,agregarCarrito ,estaEnCarrito,eliminarProducto,totalCompra,vaciarCarrito,cantTotal]= useContext(CartContext);
// generar order
  const sendOrder= async ()=>{
    const order={}
    order.buyer= {name: "Yael" ,phone: "123123", email:"y@gmail.com"}
    order.items=cart.map(prod=>{
        const id = prod.item.id
        const precio = prod.item.precio
        const nombre= prod.item.nombre
        const cantidad= prod.quantity

        return {id,precio,nombre,cantidad}
        
        })
        order.total= totalCompra()
        console.log(order);

//         // insertar order

        const db = getFirestore()
        const queryIsertCollection= collection (db,'orders')
        addDoc(queryIsertCollection , order)
        .then(resp=> setId (resp.id))
        .catch(err=>console.log(err))
        .finally( () => vaciarCarrito() )

        const queryCollectionStock = collection (db, 'productos')

        const queryUpdateStock= await query(
            queryCollectionStock,
            where (documentId(), 'in', cart.map(it=>it.item.id))
        )

        const batch= writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp=>resp.docs.forEach(res=>batch.update(res.ref,{
            stock: res.data().stock - cart.find(item=>item.item.id===res.id).quantity
        })) )
        .finally(()=> alert('Su Compra fue realizada con exito !! '))
        batch.commit()


}
    return (
        !cart.length == 0?
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
                        {
                        <CartItem/>            
                        }
                        <div>
                            <tr>
                                <th colSpan="4" scope="col" className="text-right">
                                    <th scope="col">
                                        <p className="totalesFinal">{ totalCompra() !== 0 && `PRECIO TOTAL: $ ${totalCompra()}` }</p>
                                    </th>
                                </th>
                            </tr>
                        </div>
                </div>
                        <div>
                           <span><button className="botonVaciar" onClick={ sendOrder } >Genrar Pago</button></span>
                           <span><button className="botonVaciar" onClick={ vaciarCarrito } >Vaciar Carrito</button></span>
                        </div>
                
            </div>               
            
        </div>
        :
        
        <div className="titutoTodo">
            <h1 className="tituloCarrito2">Su carrito esta vacio !! </h1>
            <h2 className="tituloCarrito2">Conoce muchos mas Productos de <span className="colorPuro">Puro Monchis</span>  </h2>
            { id && <div className="tituloCarrito2">Su numero de pedido <span className="idOrder">{id}</span> fue realiazo con exito!!  </div>  }
            <Link to="/" className="botonHome"><button className="botonHome2">Realizar otra Compra</button></Link>

        </div>
    )
} 

export default Cart
