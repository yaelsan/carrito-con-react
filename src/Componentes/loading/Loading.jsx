import "./Loading.css"

const Loading = () => {
  return (
    
    <div className="d-flex loadinComplet">
        <strong className="loading">Cargando...</strong>
        <div className="spinner-border ms-auto loadingRol" role="status" aria-hidden="true"></div>
    </div> 
    
  )
}

export default Loading