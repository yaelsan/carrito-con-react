import React, {context, useState} from "react"

export const  CartContext= React.createContext();


export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState ( [] )
console.log("el carrito ", cart);

  const agregarCarrito=(items)=>{
    cart.push(items)
  };

  const eliminarCarrito=(id)=>{};

  const vaciarCarrito=()=>{
    setCart([])
  };
  
  const existeEnCarrito = () => {};


  return (
          <CartContext.Provider value={[cart, agregarCarrito]}> 
            {children} 
          </CartContext.Provider>
  )
}
