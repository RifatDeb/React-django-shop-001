import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { domain, getheader } from '../../env'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './OldOrder.scss'


const OldOrder = () => {

    const [Oldorders, setOldorders] = useState( null )
  
  
  useEffect(()=>{
    const getOrder = async()=>{
    await Axios ({
      method:"get",
      url:`${domain}/api/oldorders/`,
      headers:getheader,
}).then(res=>{
  console.log(res.data, "old orders")
  setOldorders(res.data)
})
    }
    getOrder ()
  },[])

  return (
    <div>
    <Container>
    <h1> Old Order history</h1>
 
    <thead>
        <tr>
          <th>S.L</th>
          <th>Quantity</th>
          <th>Total</th>
          <th className='hide'>Order Status</th>
          <th> Order Detelis</th>
     
         
        </tr>
      </thead>
      <tbody>
        {
          Oldorders?.length !== null ?
          Oldorders?.map((Item, i)=>{
            return <tr key={i}>
              <td className='td'>{i+1}</td>
              <td>{Item?.cartproduct?.length}</td>
              <td>{Item.total}</td>
              <td className='hide'>{Item.order_status}</td>
            <td>  <Link className='btn btn-primary' to={`/OrderDetells/${Item?.id}`}> Detelis</Link> </td> 
            </tr>

          }):<div>
            <h2> No Orders</h2>
            <Link to="/" className='btn btn-primary'> Go to Home </Link>
          </div>
        }
      </tbody>
     

   
    </Container>
      
    </div>
  )
}

export default OldOrder
