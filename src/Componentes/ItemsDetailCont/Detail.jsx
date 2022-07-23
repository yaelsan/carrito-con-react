import { doc, getDoc, getFirestore } from "firebase/firestore"
import {useEffect, useState, useContext} from "react" 
import { Link, useParams } from "react-router-dom"
import { fetchDetail } from "../../Helpers/fetchDetail"
import { CartContext } from "../CartContex/CartContex"
import { ItemCount } from "../Count/ItemCount"

import "./detail.css"

const Detail = ({item})=> {
    const [products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const {Id} = useParams();
    
// usamos los context creados
    const [cart, agregarCarrito ,estaEnCarrito,totalCompra, cantTotalObj, eliminarProducto, vaciarCarrito ]= useContext(CartContext);

    const [cantidad, setCantidad]=useState();
    
// funcion para el contador 
    const funcionContador=(contador)=>{
      console.log("La cantidad de productos en el carrito es de :", contador);
      setCantidad(contador)
      // const [product ]= products
      const producto = {item: products, quantity: contador}
      agregarCarrito(producto);
    }
   
  
    //    useEffect(()=>{
    //   const db= getFirestore();
    //   const queryProduct = doc (db, 'productos', Id )
    //   getDoc(queryProduct)
    //   .then(resp => setProducts({id:resp.id, ...resp.data}))
    //   .catch(err =>console.log(err))
    //   .finally(()=> setLoading(false))
    // },[Id])
  
      useEffect(()=>{
        if (Id) { 
          fetchDetail
      .then (resp =>setProducts(resp.filter(prod => prod.id === Id)))
      .catch (err=> console.log(err))
      .finally(()=>setLoading (false))
        } else {
          fetchDetail
      .then (resp =>setProducts(resp))
      .catch (err=> console.log(err))
      .finally(()=>setLoading (false))
        }
        
      },[Id])
    return (
      <div className="container"> 
        {loading ? <div className="d-flex align-items-center">
                         <strong>Loading...</strong>
                      <div className="spinner-border ms-auto" role="status" aria-hidden="true">
                      </div>
                    </div> 
        :products.map(
          prod => 
                    <div  key={prod.id} className=" cardDetail card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                        <img src={prod.imagen} className="imgDetail card-img-top " alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="conjDetail card-body">
                            <h5 className="tituloDetail card-title"><strong>{prod.nombre}</strong></h5>
                            <p className="cantidadDetail card-text">Cantidad: {prod.peso}</p>
                            <p className="precioDetail card-text">Precio: ${prod.precio}</p>
                            <p className="infoDetail">Detalles : {prod.info}</p>
                            {cantidad? <Link to="/cart"> <button>Terminar Compra</button> </Link> :<ItemCount stock={prod.stock} initial={0} onAdd={funcionContador}/>}
                          </div>
                        </div>
                      </div>
                    </div>
                              
        )}
      </div>
    )
  }
  
  export default Detail