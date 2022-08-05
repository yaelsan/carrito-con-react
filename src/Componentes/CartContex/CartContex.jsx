import React, {createContext, useState} from "react"

export const  CartContext= createContext({});


export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState ( [] )
  // console.log("el carrito ", cart);


  // agregar al carrito y verifica si esta en carrito 
const agregarCarrito = (item) => {
  if (estaEnCarrito(item.item.id)) {
        const index = cart.findIndex(cartItem => cartItem.item.id===item.item.id)
        const {quantity}=cart[index]
        item.quantity += quantity 
       
        const newCart = cart.splice(index, 1)
        setCart([...newCart, item])
      } else {
        setCart([...cart,item])
      }
      setCart([...cart,item])
    }

// funcion ver si esta en carrito 
 const estaEnCarrito=(id)=>{
  return cart.some((producto)=>producto.item.id===id)
 }


  // total de la compra
   const totalCompra=()=>{
  return cart.reduce((acc,prod)=> acc= acc+( prod.item.precio * prod.quantity),0)
 }



// cantidad total de objetos
  const cantTotal=()=>{
      return cart.reduce((acc,prod)=> acc += prod.quantity , 0)
 }


//  eliminar de un producto
 const eliminarProducto=(id)=>{
  setCart(cart.filter( prod => prod.item.id !== id)) 
 }

 // vaciar carrito
 const vaciarCarrito=()=>{
  setCart([])
 }






  return (
          <CartContext.Provider value={[
           cart,agregarCarrito ,estaEnCarrito,eliminarProducto,totalCompra,vaciarCarrito,cantTotal]}> 
            {children} 
          </CartContext.Provider>
  )
}


