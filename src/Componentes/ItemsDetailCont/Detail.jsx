import { doc, getDoc, getFirestore } from "firebase/firestore"
import {useEffect, useState, useContext} from "react" 
import { useParams } from "react-router-dom"
import BotonesTerminarCompra from "../botones/BotonesTerminarCompra"
import BotonSeguirComprando from "../botones/BotonSeguirComprando"
import { CartContext } from "../CartContex/CartContex"
import { ItemCount } from "../Count/ItemCount"
import Loading from "../loading/Loading"

import "./detail.css"

const Detail = ({item})=> {
    const [product, setProduct] = useState([]);
    const[loading, setLoading] = useState(true);
    const {Id} = useParams();
    
// usamos los context creados
    const [cart, agregarCarrito ,estaEnCarrito,totalCompra, cantTotalObj, eliminarProducto, vaciarCarrito ]= useContext(CartContext);

    const [cantidad, setCantidad]=useState();
    
// funcion para el contador 
    const funcionContador=(contador)=>{
      setCantidad(contador)
      const producto = {item: product, quantity: contador}
      agregarCarrito(producto);
    }
   
  
    useEffect(() => {
      const db = getFirestore();
      const queryProduct = doc(db, 'productos', Id)
      getDoc(queryProduct)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      
      .finally(() => setLoading(false))
      
      }, [Id])
  
      
    return (
      <div className="container"> 
        {loading ? <Loading/>
        :   
        <div className="card mb-3 cardDetail" >
          <div className="row no-gutters">
            <div className="col-md-4 imgDetail">
                <img src={product.imagen} className="card-img imgDetail2" alt="..." />
            </div>
            <div className="col-md-8 restDetail">
              <div className="card-body">
                  <h5 className="card-title tituloDetail">{product.nombre}</h5>
                  <h5 className="descripcion">Descripcion :</h5>
                  <p className="card-text descripcion">{product.descripcion}</p>
                  <p className="cantidadDetail card-text descripcion">Cantidad: {product.peso}</p>
                  <p className="card-text precioDetail">$ {product.precio}</p>
                  {cantidad? <><span>< BotonesTerminarCompra/></span><span><BotonSeguirComprando/></span></> :<ItemCount stock={product.stock} initial={0} onAdd={funcionContador}/>}
              </div>
            </div>
          </div>
        </div>}
      </div>)}
  
  export default Detail