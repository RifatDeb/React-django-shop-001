
import './productdetels.scss'
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { domain, getheader} from '../../env'
import Axios from 'axios'
import { Container } from 'react-bootstrap'
import { useGlobalState } from '../../State/provider'
import Card_Product from '../Card/Card_Product'

const ProductDetails = () => {
    const {id} = useParams()
const [product, setProduct] = useState(null)
const [productcategory, setproductcategory] = useState(null)
const [{profile }, dispatch] = useGlobalState()
const History= useNavigate()


 useEffect(() => {
     const getdata = async () => {
          await Axios({
                method: "get",
                url: `${domain}/api/product/${id}/`
            }).then(res => {
                console.log(res.data)
                setProduct(res.data)
                getcategory(res?.data?.category[`id`])
            })
        }
        getdata()
    }, [id])


      const getcategory = async (id) => {
           await Axios({
                 method: "get",
                 url: `${domain}/api/category/${id}/`
             }).then(res => {
                 console.log(res.data)
                 setproductcategory(res.data)
             })
         }


        

  const AddtoCart = async(id)=>{
    profile !==null ?(

    
    await Axios({
      method: "post",
      url:`${domain}/api/addtocart/`,
      data:{"id":id},
      headers:getheader
    }).then(res=>{
      console.log(res.data, "$$$$$$$Add to cart")
      dispatch({
        type:"PAGE_RELOAD",
        pagereload:res.data
      })
      dispatch({
        type:"CART-UNCOMPLITE",
        cartuncomplite:null
      })
    })
  ) : (
     History('/LoginPage')
  )
  }
  return (
    <Container>
    {
      product !== null && (
          
           <> 
           
           <div className='singelProduct-wapper'>
              <img className='singel-img' src={product?.image} alt="photo" />
              <div className="discriptio">
              <h2>{product.title}</h2>
              <p> {product.description}</p>
              <p>price <del> {product.marketprice}</del> {product.sellingprice} </p>
              <Link onClick={()=>AddtoCart(id)} className='btn btn-primary'>Add to Cart</Link>

              </div>
              </div>
              </> 
      
      
      )
    
    }
    <div>
      <h2> Related Product</h2>
      <div className="wepper">

      { 
        productcategory !==null &&
        productcategory[0]?.category_product.map((item, i)=>(
         <div key={i}>
           <Card_Product item={item} />
           
         </div>
        ))
       
      }
      </div>
     
    </div>
  </Container>
  )
}

export default ProductDetails
