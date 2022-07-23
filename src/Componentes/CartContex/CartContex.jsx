import React, {createContext, useState} from "react"

export const  CartContext= createContext({});


export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState ( [] )
  console.log("el carrito ", cart);

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

 const estaEnCarrito=(id)=>{
  return cart.some((producto)=>producto.item.id===id)
 }

//  const cantidadInCart=()=>{
//   return cart.reduce((acc,prod)=> acc + prod.quantity ,0)
//  }

//  const eliminarProducto=(id)=>{
//   setCart(cart.filter((prod)=>prod.item.id != id))
//  }





//  agregar al carrito 
 


  // const agregarCarrito=(item)=>{
  //   const indexProduct =  cart.findIndex(prod=>prod.item.id===item.item.id)
  //   if (indexProduct===-1) {
  //     setCart([
  //       ...cart,
  //       item
  //     ])
  //   } else {
  //     const cantVieja = cart[indexProduct].quantity
  //     cart[indexProduct].quantity=cantVieja + item.quantity
  //   }
  // }


  // total de la compra
   const totalCompra=()=>{
  return cart.reduce((acc,prod)=> acc= acc+( prod.quantity * prod.precio),0)
 }


// cantidad total de objetos
  const cantTotalObj=()=>{
      return cart.reduce((acc,prod)=> acc += prod.quantity ,0)
 }

//  eliminar de un producto
 const eliminarProducto=(id)=>{
  setCart(cart.filter( prod => prod.id !== id)) 
 }

 // vaciar carrito
 const vaciarCarrito=()=>{
  setCart([])
 }




  return (
          <CartContext.Provider value={[
           cart,agregarCarrito ,estaEnCarrito,totalCompra,cantTotalObj,eliminarProducto,vaciarCarrito]}> 
            {children} 
          </CartContext.Provider>
  )
}

// isInCart , cantidadInCart , eliminarProducto , totalCompra , vaciasCart
