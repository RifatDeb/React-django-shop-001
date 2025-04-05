import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { domain } from '../../env'
import { Col, Container, Row } from 'react-bootstrap'
import Card_Product from '../Card/Card_Product'
import Heading from '../Heading/Heading'


const TendingProduct = () => {
    const [product, setproduct] = useState(null)
    useEffect(() => {
        const getdata = async() =>{
            await axios({
                method : 'get',
                url : `${domain}/api/trendingproduct/`    
            }).then(res=>{
                console.log(res.data , 'card ');
                setproduct(res.data)
                
            })
            
        }
        getdata()
    },[])
    

  return (
    <>
  <Heading title={"Trending Plants"} />   
      
    <Container>
        <div className='wepper'> 


    
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

export default TendingProduct
