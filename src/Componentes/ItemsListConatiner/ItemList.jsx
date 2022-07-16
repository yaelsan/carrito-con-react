import {useEffect, useState} from "react" 
import { Link, useParams } from "react-router-dom"
import { getFetch } from "../../Helpers/getFetch"

const ItemsList = ({})=> {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoriaId}=useParams()
  
       
  
      useEffect(()=>{
        if (categoriaId) {
          getFetch
      .then (resp =>setProducts(resp.filter(prod => prod.categoria === categoriaId)))
      .catch (err=> console.log(err))
      .finally(()=>setLoading (false))
        } else {
          getFetch
      .then (resp =>setProducts(resp))
      .catch (err=> console.log(err))
      .finally(()=>setLoading (false))
        }
        
      },[categoriaId])
    return (
      <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 "> 
        {loading ? <div className="d-flex align-items-center">
                         <strong>Loading...</strong>
                      <div className="spinner-border ms-auto" role="status" aria-hidden="true">
                      </div>
                    </div> 
        :products.map(
          prod => 
          
            
                <div  key={prod.id} className="col">
                    <div className="card h-100  ">
                       <img src={prod.imagen} className="card-img-top " alt="..." height="320px" width="300px" />
                        <div className="card-body">
                          <h5 className="card-title"><strong><u>{prod.nombre}</u></strong></h5>
                          <p className="card-text">Cantidad: {prod.peso}</p>
                          <p className="card-text">Precio: ${prod.precio}</p>
                          <Link to={`/detail/${prod.id}`}><button type="button" className="btn btn-dark">Detalles</button></Link>
                        </div>
                    </div>
                </div>
          
        )}
      </div>
    )
  }
  
  export default ItemsList