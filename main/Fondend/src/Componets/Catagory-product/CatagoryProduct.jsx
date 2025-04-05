import  Axios from 'axios'
import { useParams,} from 'react-router-dom'
import { domain } from '../../env'
import { useState,useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Card_Product from '../Card/Card_Product'

const CatagoryProduct = () => {
    const { id }= useParams()
    const [category, setCategory] = useState(null)

    useEffect(()=>{
        const getcategory = async() =>{
            await Axios ({
                method: "get",
                url:`${domain}/api/category/${id}/`,
                
            }).then(res=>{
                console.log(res.data[0])
                setCategory(res.data[0])
            })

        }
        getcategory()
   
    },[])
  return (
    <Container>
    <div className='wepper'>
        {
            category?.category !==null &&
            category?.category_product.map((item, i)=>(
                <div key={i}>
                  
                    <Card_Product item={item} />
        
                </div> 
            ))
        }
    </div>

   </Container>
  )
}

export default CatagoryProduct
