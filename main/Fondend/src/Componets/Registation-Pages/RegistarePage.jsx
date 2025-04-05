import React, { useState } from 'react'
import Axios from 'axios'
import { domain, header2 } from '../../env'
import { useNavigate } from 'react-router-dom'
import './registare.scss'

const RegistarePage = () => {

      // -----------sowHide togole-----------
  
        const [show,setShow] = useState(false)
        console.log(show);


    const History = useNavigate()
    const [userName,setUserName]=useState()
    const [password,setpassword]=useState(null)
    const [confrimPassword,setconfrimPassword]=useState(null)
    console.log(userName);
    console.log(password);
    console.log(confrimPassword);
    
    const registerUser = async()=>{
      if(password !== confrimPassword){
        alert("password Not Match Try Agin")
      }else{
        await Axios({
          method:"post",
          url:`${domain}/api/register/`,
          headers:header2,
          data:{
            "username":userName,
            "password":password
          }
  
        }).then(res=>{
          console.log(res.data)
          alert(res.data['message'])
          History('/login')
        })
      }
    }
  return (

    <div class="from-body">
    <div class="wrapper">

      <h1>Register</h1>
      <div class="input-box">
        <input onChange={(e)=>setUserName(e.target.value)}  type="text" placeholder="Username" required />
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="input-box">
        <input onChange={(e)=>setpassword(e.target.value)} type={show ? 'text' : 'password'}  placeholder="Password" required />
           <div onClick={()=>setShow(!show)}>
{ show ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
   </div>

      </div>
      <div class="input-box">
        <input onChange={(e)=>setconfrimPassword(e.target.value)} type={show ? 'text' : 'password'}  placeholder="Confirm Password" required />
        <div onClick={()=>setShow(!show)}>
{ show ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
   </div>

      </div>

      <div class="remember-forgot">
        <label><input type="checkbox" />Agree to Terms & Conditions </label>
     
      </div>
      <button onClick={registerUser}  class="btn"> Register </button>
      <div class="register-link">
        <p>Already have an  account? <a href="/login"> <u> Login</u></a></p>
      </div>

  </div>
  </div>
  )
}

export default RegistarePage
