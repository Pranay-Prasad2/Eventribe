import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Auth.css'
import login from './3918929.jpg'
const Auth = (props) => {
    const [Credential, setCredential] = useState({Org_url:"",password:""});
    const [Ok, setOk] = useState(true);
    const navigate = useNavigate();
    const onChange = (e) =>{
        e.preventDefault();
        setCredential({...Credential,[e.target.name]:e.target.value});
    }
    const {cl} = props;
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('/api/users/UserLogin',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({url:Credential.Org_url,password:Credential.password})
        })
        const json = await response.json();
        localStorage.setItem('Success',json.success);
        localStorage.setItem('id',json.id);
        if(json.success && json.id === cl._id ){
            navigate('/'+cl._id+cl.url+'/Admin');
        }
        else{
            setCredential({Org_url:"",password:""});
            setOk(false);
        }
    }
  return (
      <div className="Auth_main">

          <div className="authcard">
               <h3>Client Login</h3>
               <div className="partation">

               <form onSubmit={handleSubmit}>
                   <input type="text" name='Org_url' required placeholder='Enter Organization url' value={Credential.Org_url} onChange={onChange}  />
                   <input name="password" type="Password" required placeholder={Ok?'Enter password':'Incorrect Credentials'} value={Credential.password} onChange={onChange} />
                   <button type='submit' className='loginbutton'>Login</button>
               </form>
               <div className="imagesection">
                   {/* <img src={login} alt="" /> */}
               </div>
               </div>
          </div>
      </div>
  )
}

export default Auth