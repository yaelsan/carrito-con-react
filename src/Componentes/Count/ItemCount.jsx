import { useState } from "react"

export const ItemCount = ({stock, onAdd, initial}) => {
    const [ count, setCount]=useState(initial);

    const sumar=()=>{
        if (count < stock) {
            setCount(count + 1 )
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
        <span onClick={sumar}>+</span> 
        <span> {count} </span>
        <span onClick={restar}>-</span>
        </div>
        <button type="button" className="btn btn-dark" disabled={count === 0 } onClick={()=>onAdd(count)}>Agregar Carrito</button>
    </>
  )
}


