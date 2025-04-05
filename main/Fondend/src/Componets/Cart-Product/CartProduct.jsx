import React from 'react'
import { useGlobalState } from '../../State/provider'
import { Container,Col,Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import {Link, useNavigate}from "react-router-dom"
import { domain,getheader } from '../../env'
import Axios  from 'axios'
import './cartproduct.scss'
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";



const CartProduct = () => {
    const [{ cartuncomplite },dispatch] = useGlobalState()
    const History= useNavigate()
    console.log(cartuncomplite, "$$$  Gloval state  hr");

     let cart_product_length = 0;
 if(cartuncomplite !==null){
   cart_product_length=cartuncomplite?.cartproduct?.length

 }else{
   cart_product_length=0;
 }

 const cartUpdate = async(id)=>{
   await Axios({
     method: "post",
     url:`${domain}/api/updatecart/`,
     data:{"id":id},
     headers:getheader
   }).then(res=>{
     // console.log(res.data, "$$$$$$$cart updeta")
     dispatch({
       type:"PAGE_RELOAD",
       pagereload:res.data
     })
   })
 }

 const editCart = async(id)=>{
   await Axios({
     method: "post",
     url:`${domain}/api/editcart/`,
     data:{"id":id},
     headers:getheader
   }).then(res=>{
     // console.log(res.data, "$$$$$$$cart updeta")
     dispatch({
       type:"PAGE_RELOAD",
       pagereload:res.data
     })
   })
 }


 const deletedCart = async(id)=>{
   await Axios({
     method: "post",
     url:`${domain}/api/deletecart/`,
     data:{"id":id},
     headers:getheader
   }).then(res=>{
     // console.log(res.data, "$$$$$$$cart updeta")
     dispatch({
       type:"PAGE_RELOAD",
       pagereload:res.data
     })
   })
 }

 const DeleteFullCart =async(id)=>{
await Axios({
 method:"post",
 url:`${domain}/api/fullcartdelete/`,
 headers:getheader,
 data:{"id":id}
}).then(res=>{
 // console.log(res.data,  "$$$$$$$$$$ fullcart deleted")
 dispatch({
   type:"PAGE_RELOAD",
   pagereload:res.data
 })

 dispatch({
   type:"CART-UNCOMPLITE",
   cartuncomplite:null
 })
alert("your Full cart is deleted")
 History('/')
})
 }
  return (
    <Container>
  
    {
        cart_product_length !== 0 ?
        (
<>

<Row>
{/* <Col sm={12} md={8} lg={8}> */}
  {
    cartuncomplite?.cartproduct.map((item, i)=>
      
    <div className="cart-section">
<div className="images-section">
<img className='cart-img' src={item.product[0]?.image}alt="product" />
</div>

<div className="discription-section">
<h5>{item.product[0]?.title}</h5>
<p>price: {item.price} </p>
 <p> Quantity <button className='quntity-button'> {item.quantity}  </button>  </p>
 <p> Total : {item.Subtotal}</p>
 <button   onClick={()=> cartUpdate(item.id)} className='action-icon'><IoAdd /></button>
 <button  onClick={()=>editCart(item.id)} className='action-icon'><FaMinus /></button>
 <button  onClick={()=>deletedCart(item.id)} className='action-icon'><MdDelete /></button>


 

</div>


    </div>
   
   
    )
  }
 
 {/* </Col> */}

  {/* <Col sm={12} md={8} lg={8}> */}
  
  
  
  {/* </Col> */}


  <hr />
  <p>  Subtotal : {cartuncomplite?.total }</p>

</Row>

</>
      
)
:
(
        <div>
            <h2> Ther Is No Cart</h2>
        </div>
        )

    }
    <Row>
      <Col>
      <Link className='btn  btn-info' to="/oldorder"> Old Order</Link>
      </Col>
      {
        cart_product_length !==0 &&
        <>
        <Col>
       
       <Link onClick={()=>DeleteFullCart(cartuncomplite?.id)} className=' btn btn-danger'> Deleate Cart</Link>

     </Col>
     <Col>  
     <Link className='btn btn-primary' to="/order"> Order Now </Link>

     </Col>
        </>
      }
    </Row>
</Container>
  )
}

export default CartProduct
