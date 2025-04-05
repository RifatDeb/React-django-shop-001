import React from 'react'
import CartProduct from '../Componets/Cart-Product/CartProduct'
import Heading from '../Componets/Heading/Heading'

const Cart = () => {
  return (
   <>
  <Heading title={"Your Cart Items"} />  
   <CartProduct />
   </>
  )
}

export default Cart
