import './login.scss'
import Axios from 'axios'
import React, { useState } from 'react'
import { domain, header2} from '../../env'

const LoginPages = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    // -----------sowHide togole-----------

      const [show,setShow] = useState(false)
      console.log(show);
      
 
   
    
   
    
    const loginbutton = () => {
        Axios({
            url: `${domain}/api/login/`,
            method: "post",
            headers:header2,
            data: {
                "username": username,
                "password": password
            }
        }).then(response => {
        //   console.log(response.data['token'])
            window.localStorage.setItem('token', response.data['token'])
             window.location.href = "/"
        
        
        }).catch ( e=>{
          alert("you username & password is wroun!")
        }

        )
    }
    
  return (
    // <div classNameNameName="container my-5 p-5">
    //         <h1>Login</h1>
    //         <div classNameName="form-group">
    //             <label >Username</label>
    //             <input  type="text" classNameName="form-control" placeholder="Username" />
    //         </div>
    //         <div classNameName="form-group">
    //             <label >Password</label>
    //             <input onChange={e => setPassword(e.target.value)} type="password" classNameName="form-control" placeholder="Password" />
    //         </div>
    //         <p><button onClick={loginbutton} classNameNameName="btn btn-success my-4">Login</button></p>
    //     </div>








<div className="from-body">
<div className="wrapper">

  <h1>Login</h1>
  <div className="input-box">
    <input onChange={e => setUsername(e.target.value)}  type="text"  placeholder="Username" required />
    <i className="fa-solid fa-user"></i>
  </div>
  <div className="input-box">
    <input onChange={(e)=> setPassword(e.target.value)} type={show ? 'text' : 'password'}   placeholder="Password" required />
   <div onClick={()=>setShow(!show)}>
{ show ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
   </div>
  </div>
  <div className="remember-forgot">
    <label><input type="checkbox" />Remember Me</label>
    <a href="#">Forgot Password</a>
  </div>
  <button  onClick={loginbutton}  className="btn">Login</button>
  <div className="register-link">
    <p>Dont have an account? <a href="/"> <u> Register </u></a></p>
  </div>

</div>
</div>

  )
}

export default LoginPages






