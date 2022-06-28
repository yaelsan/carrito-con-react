import {useEffect, useState} from "react" 
import { getFetch } from "../../Helpers/getFetch"

const ItemsList = ({})=> {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
  
      
  
      useEffect(()=>{
        getFetch
      .then (resp =>setProducts(resp))
      .catch (err=> console.log(err))
      .finally(()=>setLoading (false))
      },[])
      
    return (
      <div> 
        {loading ? <div className="d-flex align-items-center">
                         <strong>Loading...</strong>
                      <div className="spinner-border ms-auto" role="status" aria-hidden="true">
                      </div>
                    </div> 
        :products.map(
          prod => 
          
            <div key={prod.id} className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                       <img src={prod.imagen} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title"><strong><u>{prod.nombre}</u></strong></h5>
                          <p className="card-text">Cantidad: {prod.peso}</p>
                          <p className="card-text">Precio: ${prod.precio}</p>
                          <button type="button" className="btn btn-dark">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    )
  }
  
  export default ItemsList