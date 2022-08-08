import { useContext, useState } from "react"
import { CartContext } from "../CartContex/CartContex"
import { Link } from "react-router-dom"
import "./Cart.css"
import CartItem from "./CartItem"
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch,} from 'firebase/firestore'
import Swal from "sweetalert2"


const Cart = () => {

    const [dataForm, setDataForm] = useState({email: '',validateEmail:'', name: '', phone: ''})
    const [id, setId] = useState()
    const [cart,addToCart ,isInCart,deletProduct,totalBuy,emptyCart,quantityTtotal]= useContext(CartContext);
// generar order
  const sendOrder= async (e)=>{
    e.preventDefault();
    
    
if (dataForm.email === "" || dataForm.name === "" || dataForm.phone === "" || dataForm.validateEmail === "" || dataForm.validateEmail !== dataForm.email ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algunos campos estan incompletos o incorrectos!'
          })
} else {
    let order={}

    order.buyer= dataForm
    order.items=cart.map(prod=>{
        const id = prod.item.id
        const precio = prod.item.precio
        const nombre= prod.item.nombre
        const cantidad= prod.quantity

        return {id,precio,nombre,cantidad}
        
        })
        order.total= totalBuy()
        console.log(order);

        // insertar order

        const db = getFirestore()
        const queryIsertCollection= collection (db,'orders')
        addDoc(queryIsertCollection , order)
        .then(resp=> setId (resp.id))
        .catch(err=>console.log(err))
        .finally( () => emptyCart() )

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
        .finally(()=> Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su Compra Fue Realizada con exito !!',
            showConfirmButton: false,
            timer: 2000
          }))
        batch.commit()

}

}

  

const handleChange=(e)=>{
    setDataForm({
        ...dataForm,
        [e.target.name] : e.target.value
    })
}
    return (
        !cart.length == 0?
        <div className="container">
            <main className="formPagos">
        <div className="container">
            <div className="row mt-3">
                <div className="col ">
                    <h2 className="titulasoPago d-flex justify-content-center mb-3 ">Realizar Compra</h2>
                    <form id="procesar-pago" action="#">
                        <div className="form-group row">
                            <label  className="col-12 col-md-2  col-form-label detallesCampo">Nombre y Apellido :</label>
                            <div className="col-12 col-md-10">
                              <input 
                              type='text' 
                              name='name' 
                              placeholder='Ingresa tu Nombre y Apellido' 
                              value={dataForm.name}
                              onChange={handleChange}
                              className="form-control" 
                              />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-12 col-md-2 col-form-label detallesCampo">Correo :</label>
                            <div className="col-12 col-md-10">
                            <input 
                            type='email' 
                            name='email'
                            placeholder='Ingresa tu Email' 
                            value={dataForm.email}
                            onChange={handleChange}
                            className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-12 col-md-2 col-form-label detallesCampo">Validar Correo :</label>
                            <div className="col-12 col-md-10">
                            <input 
                            type='email' 
                            name='validateEmail'
                            placeholder='Validar el Email' 
                            value={dataForm.validateEmail}
                            onChange={handleChange}
                            className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-12 col-md-2 col-form-label detallesCampo">Telefono :</label>
                            <div className="col-12 col-md-10">
                            <input 
                            type='tel' 
                            name='phone'
                            placeholder='Ingresa tu Numero de Telefono' 
                            value={dataForm.phone}
                            onChange={handleChange}
                            className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
            <div className="row">
                <div className="col-md-12">
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
                                        <p className="totalesFinal">{ totalBuy() !== 0 && `TOTAL A PAGAR: $${totalBuy()}` }</p>
                                    </th>
                                </th>
                            </tr>
                        </div>
                </div>
                        <div>
                           <span><button className="botonVaciar" onClick={ sendOrder } >Generar Pago</button></span>
                           <span><button className="botonVaciar" onClick={ emptyCart } >Vaciar Carrito</button></span>
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
