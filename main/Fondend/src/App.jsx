import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import {BrowserRouter,  Route, Routes} from 'react-router-dom'
// import Navber from './Componets/Navbar';
// import Productdetels from './Componets/Productdetels';
// import CategoryProduct from './Componets/CategoryProduct';
import ProfilePage from './Componets/Profile/ProfilePage';
// import LoginPage from './Componets/LoginPage';
// import RegistarPage from './Componets/RegistarPage';
import  Axios  from 'axios';
import { domain, getheader,token} from './env';
import { useGlobalState } from './State/provider';
// import Cart from './Componets/Cart';
// import Oldorder from './Componets/Oldorder';

// import OrderDetells from './Componets/OrderDetells';
import Shop from './pages/Shop';
import Fotter from './Componets/Fotter/Fotter';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Registation from './pages/Registation';
import Login from './pages/Login';
import ProductDetails from './Componets/Product-Detais/ProductDetails';
import OldOrder from './Componets/Old-Order/OldOrder';
import OrderDetails from './Componets/Order-Details/OrderDetails';
import Navber from './Componets/Nabver/Navber';
import CatagoryProduct from './Componets/Catagory-product/CatagoryProduct';
import ContractUs from './pages/ContractUs';


const App = () => {
  const [{ profile, pagereload,cartcomplite,cartuncomplite}, dispatch] = useGlobalState()
  //  console.log(profile, "$$$$urser profile");
  // console.log(cartcomplite);
  // console.log(cartuncomplite);
  
  
  
   console.log(token)
  useEffect(()=>{
    if(token !== null ) {
      const getdata = async() =>{
        await Axios({
          method:"get",
          url:`${domain}/api/profile/`,
          headers:getheader,
        }).then(res =>{
          //  console.log(res.data['data'], "$user hear")
          dispatch({
            type:"ADD_PROFILE",
            profile:res.data["data"],
          })
        })
       
      }
      getdata()
     }
    
  
  },[pagereload])

  useEffect(()=>{
const getcart = async() =>{
  await Axios({
    method: "get",
    url:`${domain}/api/cart/`,
    headers:getheader
  }).then(res =>{
    console.log(res.data, "$$$$$ cart")
    {
      const all_data = []
      res?.data.map(data=>{
        if(data.complite){
          all_data.push(data)
          dispatch({
            type:"CART-COMPLITE",
            cartcomplite:all_data
          })
        }
        else{
          dispatch({
            type:"CART-UNCOMPLITE",
            cartuncomplite:data

          })
        }
      })
    }
  })
  
}
getcart()

  },[pagereload])

  return (

    <BrowserRouter>
    <Navber />
   
    <Routes>


    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/Productdetels/:id" element={<ProductDetails />} />
    <Route path="/CategoryProduct/:id" element={<CatagoryProduct/>} />
    
    {
      profile !==null ?(
        <>
         
         <Route path="/ProfilePage" element={<ProfilePage />} />
         {/* <Route path="/cart" element={<Cart />} /> */}
         <Route path="/cart" element={<Cart />} />

         <Route path="/oldorder" element={<OldOrder />} />
         <Route path="/order" element={<Order />} />
         <Route path="/OrderDetells/:id" element={<OrderDetails />} />
      </>
      ):
      (
        <>
        <Route path="/Login" element={<Login />} />
        <Route path="/registation" element={<Registation />} />
        </>
      )
     
    }

   
<Route path="/contractus" element={<ContractUs />} />
    
      </ Routes>
      <Fotter />
    </ BrowserRouter>

  )
}

export default App
