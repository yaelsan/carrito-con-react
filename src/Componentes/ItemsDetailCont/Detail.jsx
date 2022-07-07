import {useEffect, useState} from "react" 
import { Link, useParams } from "react-router-dom"
import { fetchDetail } from "../../Helpers/fetchDetail"

import "./detail.css"

const Detail = ({})=> {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const {Id}=useParams()
  
       
  
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
        {products.map(
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
                            <button type="button" className="btn btn-dark">Agregar Carrito</button>
                          </div>
                        </div>
                      </div>
                    </div>
                              
        )}
      </div>
    )
  }
  
  export default Detail