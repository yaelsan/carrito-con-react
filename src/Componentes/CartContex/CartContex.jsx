import React, {createContext, useState} from "react"

export const  CartContext= createContext({});


export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState ( [] )


  // agregar al carrito y verifica si esta en carrito 
const addToCart = (item) => {
  if (isInCart(item.item.id)) {
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
  const isInCart=(id)=>{
    return cart.some((producto)=>producto.item.id===id)
  }


  // total de la compra
  const totalBuy=()=>{
    return cart.reduce((acc,prod)=> acc= acc+( prod.item.precio * prod.quantity),0)
  }



// cantidad total de objetos
  const quantityTtotal=()=>{
    return cart.reduce((acc,prod)=> acc += prod.quantity , 0)
  }


//  eliminar de un producto
  const deletProduct=(id)=>{
    setCart(cart.filter( prod => prod.item.id !== id)) 
  }

 // vaciar carrito
  const emptyCart=()=>{
    setCart([])
  }






  return (
          <CartContext.Provider value={[
           cart,addToCart ,isInCart,deletProduct,totalBuy,emptyCart,quantityTtotal]}> 
            {children} 
          </CartContext.Provider>
  )
}


