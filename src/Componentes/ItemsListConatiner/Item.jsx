import {useEffect, useState} from "react" 
import { Link, useParams } from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import "./ItemList.css"
import Loading from "../loading/Loading"


const Item = ({})=> {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoriaId}=useParams()
   
       
    
// mostrar todos los productos desde firebase

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria', '==', categoriaId)) : queryCollection
        getDocs(queryCollectionFilter)
        .then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false))
        },
     [ categoriaId ])
    
    return (
      <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 "> 
        {loading ? <Loading/>
        :products.map(
          prod => 
                <div  key={prod.id} className="col">
                    <div className="card h-100  ">
                      <div className="imgList">
                      <img src={prod.imagen} className="card-img-top " alt="..." height="300px" width="auto " />
                      </div>
                        <div className="card-body">
                          <h5 className="card-title"><strong><u>{prod.nombre}</u></strong></h5>
                          <p className="card-text pesoLista">Cantidad: {prod.peso}</p>
                          <p className="card-text precioLista">${prod.precio}</p>
                          <Link to={`/detail/${prod.id}`}><button type="button" className="btn btn-dark botonDetalles">Detalles</button></Link>
                        </div>
                    </div>
                </div>
          
        )
        
        }
      </div>
    )
  }
  
  export default Item