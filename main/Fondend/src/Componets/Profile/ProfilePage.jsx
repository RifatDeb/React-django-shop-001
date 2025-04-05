import { useState } from 'react'
import Axios from 'axios';
import { Container,Row,Col} from 'react-bootstrap'
 import './profile.scss'
import { useGlobalState } from '../../State/provider'
import { domain, getheader } from '../../env';

const Profile = () => {

    const [{ profile}, dispatch] = useGlobalState()
  // console.log(profile , 'profile ');

    const [images,setImage] = useState(null)
    //  console.log(images, 'fffffff');
    
    const [email,setEmail] = useState(profile?.prouser.email)
    const [first_name,setFirst_name] = useState(profile?.prouser.first_name)
    const [last_name,setLast_name] = useState(profile?.prouser.last_name)
     
   
    const updateprofileimage = async() => {
      const fromdata = new FormData()
      fromdata.append('image',images)
      await Axios({
        method: "post",
        url:`${domain}/api/updateprofileimage/`,
        headers: getheader,
        data:fromdata,
      }).then(res =>{
          console.log(res.data)
         dispatch({
           type:"PAGE_RELOAD",
           pagereload:res.data
        })
         alert(res.data["message"])
      })
     }
  
   const userdataupdate = async() =>{
    await Axios({
      method: "post",
      url:`${domain}/api/userdataupdate/`,
      headers:getheader,
      data:{
        "first_name":first_name,
        "last_name":last_name,
        "email":email
      }
    }).then(res => {
    //  console.log(res.data.message, "$$ post data");
    alert(res.data.message)
     dispatch({
      type:"PAGE_RELOAD",
      pagereload: res.data
    })
    
    })
    
   }

  
    
  return (
    <div className='profile-body'>
    <Container>
        <Row> 
            <Col sm={12} md={6} lg={6}>

                <div className="profile">
                <img className='profile-img' src={`${domain}${profile?.image}`}alt="" />
                </div>
      <div>
        
<h3> UserName : {profile?.prouser?.username}</h3>
<p> Name : {profile?.prouser?.first_name} {profile?.prouser?.last_name}</p>

<p> Email : <u> {profile?.prouser?.email}  </u> </p>
         
      </div>

      <div> 
        <input className='files' type="file" onChange={e => setImage(e.target.files[0])} />
        <button onClick={updateprofileimage} className='btn btn-primary d-block '>Update Profile Images</button>
      </div>

 

      </Col>

      <Col sm={12} md={6} lg={6}>
      <h3> profile  Settings </h3>
 
   
      <div className='field'>
        <label> UserEmail</label>
        <input type="text" onChange={e =>setEmail (e.target.value)} placeholder='Enter your Email' value={email} />
      </div>
      <div className='field'>
        <label> FastName</label>
        <input type="text" onChange={e =>setFirst_name (e.target.value)} placeholder='Enter your FastName'value={first_name} />
      </div>
      <div className='field'>
        <label> LastName</label>
        <input type="text" onChange={e =>setLast_name (e.target.value)} placeholder='Enter your LastName' value={last_name} />
      </div>
      <button className='btn btn-primary' onClick={userdataupdate}>Update My Profile</button>
      
           </Col>
          
        </Row>
     
      
    </Container>
    </div>
  )
}

export default Profile
