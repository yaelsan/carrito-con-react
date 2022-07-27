import { useState } from "react"
import BotonRestar from "../botones/BotonRestar";
import BotonSumar from "../botones/BotonSumar";

export const ItemCount = ({stock, onAdd, initial}) => {
    const [ count, setCount]=useState(initial=1);

    const sumar=()=>{
        if (count < stock) {
            setCount(count + 1 );
        }
    };
    const restar=()=>{
        if (count > initial) {
            setCount(count - 1 )
        }
    }; 


  return (
    <>
         <div>
        <span onClick={sumar}><BotonSumar/></span> 
        <span className="numeroContador"> {count} </span>
        <span onClick={restar}>< BotonRestar/></span>
        </div>
        <button type="button" className="btn btn-dark botonDetalles" disabled={count === 0 } onClick={()=>onAdd(count)}>Agregar Carrito</button>
    </>
  )
} 


