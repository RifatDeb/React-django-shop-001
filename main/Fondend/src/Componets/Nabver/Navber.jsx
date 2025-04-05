import React, { useState } from 'react'
import Button from './Button/Button'
import './navber.scss'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../../State/provider';

export default function Navber() {
    const [click, setClick] = useState(false)
    const handelClick = () =>setClick(!click)
    const closeMobileMenu = () =>setClick(false)


      const [{ profile,cartuncomplite }, dispatch] = useGlobalState()
      // console.log(profile, "$$$  Gloval state");
      let cart_product_length = 0
      if(cart_product_length !==null){
        cart_product_length=cartuncomplite?.cartproduct?.length
    
      }else{
        cart_product_length=0
      }
    
      const logOut =()=> {
        window.localStorage.clear()
        dispatch({
          type:"ADD_PROFILE",
          profile:null
    
        })
        window.location.href='/'
      }
    


  return (
    <>
    <nav className='navbar'>
        <Link to='/' className="navbar-logo "> EPIC</Link>


        <div className="menu-icon" onClick={handelClick}>
       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />    
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            
        <li className="nav-item">
             <Link to='/' className='nav-links'
              onClick={closeMobileMenu}>
                Home </Link> 
                 </li>  

                 <li className="nav-item">
             <Link to='/shop' className='nav-links'
              onClick={closeMobileMenu}>
                Shop </Link> 
                 </li>    

                 <li className="nav-item">
             <Link to='/contractus' className='nav-links'
              onClick={closeMobileMenu}>
                Contract Us </Link> 
                 </li>  
            
                 

                                 
                 {
              profile !== null ?
                (
                  <>

<li className="nav-item">
             <Link to="/cart" className='nav-links'
              onClick={closeMobileMenu}>
               Cart  ({cart_product_length})  </Link> 
                 </li>     


                 <li className="nav-item">
             <Link to="/profilePage" className='nav-links'
              onClick={closeMobileMenu}>
                Profile </Link> 
                 </li>    


                 <li className="nav-item">
             <Link className='nav-links'
              onClick={logOut}>
                LogOut </Link> 
                 </li> 
                 
 
                 

                  </>
                ) :
                <>
                         
       <li className="nav-item">
             <Link to="/registation" className='nav-links'
              onClick={closeMobileMenu}>
              Registation </Link> 
                 </li> 

                 <li className="nav-item">
             <div className='nav-links-mobile'
              onClick={closeMobileMenu}>
              <Button /> </div> 
                 </li> 
                </>
            }


             </ul>
             
    </nav>
      
    </>
  )
}
