
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { domain } from '../../env'

import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './product.scss'

import Card_Product from '../../Componets/Card/Card_Product'
import { GrLinkNext,GrLinkPrevious  } from "react-icons/gr";



const Product = () => {
    const [product, setProduct] = useState(null)
    const [categoryname, setCategoryname] = useState(null)
   
    useEffect(() => {
        const getdata = async () => {
           await Axios({
                method: "get",
                url: `${domain}/api/product/`
            }).then(res => {
                setProduct(res.data)
                 console.log(res.data)
            })
        }
        getdata()
    }, [])
    useEffect(()=>{
        const getcategory = async() =>{
        await Axios ({
            method: "get",
            url: `${domain}/api/category/`
        }).then(res =>{
            console.log(res.data)
            setCategoryname(res.data)
        })
        }
        getcategory()
    },[])   
  
    
  
   const previousPages= async () =>{
        await Axios({
            method: "get",
            url: product?.previous
        }).then(res =>{
            console.log(res.data)
            setProduct(res.data)
          
        })
  
     }
   const nextProduct =async() =>{
        await Axios({
            method: "get",
            url:product?.next
        }).then(res =>{
            console.log(res.data)
            setProduct(res.data)
        })
  
    }
  return (
        
<Container>
            {/* <Row >
                <Col md={"9"}>

                <Row>
                    {
                        product !== null &&
                        product?.results.map((item, i) =>(
                            <Col  md={"4"}key={i} > 
                            <Card_Product  item={item} />
                           
                             </Col>

                        )
                    )
                    }
                  <div className="pagenations"> 

                    <div>
                        {product?.previous !==null ? 
                        (<button onClick={previousPages} className='btn btn-danger'> <GrLinkPrevious /> </button>):
                         (
                            <button className='btn btn-danger' disabled > <GrLinkPrevious /></button>
                        )}
                         </div>
                    <div> 
                    {product?.next !==null ?
                     (
                     <button onClick={nextProduct} className='btn btn-danger '>  <GrLinkNext /></button>): 
                     (
                            <button className='btn btn-danger' disabled><GrLinkNext /></button>
                        )}
                        </div>
                  </div>

                  {/* ---------------------------------------------------------------------------- */}
             

                   {/* </Row>
                        </Col>
                        <Col md={3}>
                        <h2 className='m-3'> All Catagory</h2>
                        {
                            categoryname?.categoryname !== null &&
                           categoryname?.map((item,i)=>(
                                <div className="button" key={i}>
                                    <Link className='btn btn-primary m-3' to={`/CategoryProduct/${item?.id}`}>{item.title}</Link>
                                </div>
                            )) 
                        }
                        </Col>
                    
                        </ Row> */}


                <div className='catagory-wapper'>

                <div>
                        <h2 className='m-3'> All Catagory</h2>
                        {
                            categoryname?.categoryname !== null &&
                           categoryname?.map((item,i)=>(
                                <div className="button" key={i}>
                                    <Link className='btn' to={`/CategoryProduct/${item?.id}`}>{item.title}</Link>
                                </div>
                            )) 
                        }
                        </div>



                <div>
                    <div className="catagoryProduct-wapper">
                    {
                        product !== null &&
                        product?.results.map((item, i) =>(
                            <div key={i} > 
                            <Card_Product  item={item} />
                           
                             </div>

                        )
                    )
                    }

                    </div>
                    
                    <div className="pagenations"> 

<div>
    {product?.previous !==null ? 
    (<button onClick={previousPages} className='btn btn-danger'> <GrLinkPrevious /> </button>):
     (
        <button className='btn btn-danger' disabled > <GrLinkPrevious /></button>
    )}
     </div>
<div> 
{product?.next !==null ?
 (
 <button onClick={nextProduct} className='btn btn-danger '>  <GrLinkNext /></button>): 
 (
        <button className='btn btn-danger' disabled><GrLinkNext /></button>
    )}
    </div>
</div>
                </div>
                       
                        </div>
                        </Container>
       
  )
}

export default Product
