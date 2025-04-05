import  Axios  from 'axios';
import React from 'react'
import Card from 'react-bootstrap/Card';
import {  Link } from 'react-router-dom';
 import { useNavigate } from "react-router-dom";
import { domain,getheader } from '../../env';
import { useGlobalState } from '../../State/provider';
import './card.scss'

const Card_Product = ({item}) => {
    
  const [{profile }, dispatch] = useGlobalState()
  const History= useNavigate()

  const AddtoCart = async(id)=>{
    profile !== null ? (
    await Axios({
      method: "post",
      url:`${domain}/api/addtocart/`,
      data:{"id":id},
      headers:getheader
    }).then(res=>{
      // console.log(res.data, "$$$$$$$Add to cart")
      dispatch({
        type:"PAGE_RELOAD",
        pagereload:res.data
      })
    })

  ) : (
     History('/Login')
  )
  }
  return (
    
    <div className="cards">
        <div className="card-body">
            <div>
<img  className="card-img" src={item.image} alt={item.title} />
            </div>

            <div className="card-desciption">
                <p className='heading'>{(item.title).substring(0,18)} </p>
                <p> {(item.description).substring(0,50)} <Link to={`/Productdetels/${item.id}`} >more ...</Link></p>
                <p>price  <del> {item.marketprice} </del> {item.sellingprice} </p>

                <button onClick={()=>AddtoCart(item.id)} className='btn-1'> Add to Cart</button>
            </div>
        </div>

    </div>
          

    //         <Card >
    //  <Link to={`/Productdetels/${item.id}`}> 
    //  <Card.Img variant="top" src={item.image} style={{ width: '12rem',
    //         height:'15rem',
    //         objectFit:'contain',
    //       }} />
    //  </Link>
    //   <Card.Body>
    //     <Card.Title> {item.title} </Card.Title>
    //     <Card.Text>
    //      {(item.description).substring(0,50)} <Link to={`/Productdetels/${item.id}`} >more ...</Link>
    //     </Card.Text>
    //   </Card.Body>
    
    //   <Card.Body>
    //     <p>price  <del> {item.marketprice} </del> {item.sellingprice} </p>

    //     <button onClick={()=>AddtoCart(item.id)} className='btn btn-primary'> Add to Cart</button>
       
    //   </Card.Body>
    // </Card>

  )
}

export default Card_Product
