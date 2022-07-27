import { doc, getDoc, getFirestore } from "firebase/firestore"
import {useEffect, useState, useContext} from "react" 
import { Link, useParams } from "react-router-dom"
import { fetchDetail } from "../../Helpers/fetchDetail"
import BotonesTerminarCompra from "../botones/BotonesTerminarCompra"
import BotonesDetalles from "../botones/BotonesTerminarCompra"
import BotonSeguirComprando from "../botones/BotonSeguirComprando"
import { CartContext } from "../CartContex/CartContex"
import { ItemCount } from "../Count/ItemCount"

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
      // console.log("La cantidad de productos en el carrito es de :", contador);
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
        {loading ? 
        
        <div className="d-flex align-items-center">
                         <strong>Loading...</strong>
                      <div className="spinner-border ms-auto" role="status" aria-hidden="true">
                      </div>
                    </div>

                :   <div className="card mb-3 cardDetail" >
                      <div className="row no-gutters">
                        <div className="col-md-4 imgDetail">
                           <img src={product.imagen} className="card-img imgDetail2" alt="..." />
                        </div>
                        <div className="col-md-8 restDetail">
                          <div className="card-body">
                             <h5 className="card-title tituloDetail">{product.nombre}</h5>
                             <h5 className="descripcion">Descripcion</h5>
                             <p className="card-text descripcion">Lorem ipsum dolor sit antium ducimus nobis officia ullam cumque molestias eos ratione, quibusdam maiores quisquam, obcaecati corporis. Voluptate cum quo voluptas.</p>
                             <p className="cantidadDetail card-text descripcion">Cantidad: {product.peso}</p>
                             <p className="card-text precioDetail">$ {product.precio}</p>
                             {cantidad? <><span>< BotonesTerminarCompra/></span><span><BotonSeguirComprando/></span></> :<ItemCount stock={product.stock} initial={0} onAdd={funcionContador}/>}
                          </div>
                        </div>
                      </div>
                    </div>
                      }
      </div>
    )
  }
  
  export default Detail