import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { domain } from '../../env'
import {Container } from 'react-bootstrap'
import Card_Product from '../Card/Card_Product'
import Heading from '../Heading/Heading'
import './latestProduct.scss'

const LatestProduct = () => {
    const [product, setproduct] = useState(null)
    useEffect(() => {
        const getdata = async() =>{
            await axios({
                method : 'get',
                url : `${domain}/api/latestproduct/`    
            }).then(res=>{
                console.log(res.data , 'card ');
                setproduct(res.data)
                
            })
            
        }
        getdata()
    },[])
    

  return (
    <>
  <Heading title={"Latest Plants"} />     
    <Container>
      

<div className="wepper">


{
                 product !== null &&
                 product.map((item,i)=>(
                    <div key={i}>
                        <Card_Product item={item} />
            </div>
                 )
                  
                 )
            }

</div>
    
          
           
     
    </Container>


      
    </>
  )
}

export default LatestProduct
