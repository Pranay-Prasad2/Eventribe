import React,{useState} from 'react'
import './Auth.css'
import { useNavigate } from "react-router-dom";
const MainAuth = () => {
    const [Credential, setCredential] = useState({password:""});
    const [Ok, setOk] = useState(true);
    const navigate = useNavigate();
    const onChange = (e) =>{
        e.preventDefault();
        setCredential({...Credential,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('/api/Admin/adminlogin',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({password:Credential.password})
        })
        const json = await response.json();
        localStorage.setItem('dis_blocker__1525455_12afrt89568er34',json.success);
        if(json.success){
            navigate('/Admin');
        }
        else{
            setCredential({password:""});
            setOk(false);
        }
    }
  return (
    <div className="Auth_main">
        <div className="authcard">
            <h3>Admin Login</h3>
            <div className="partation">

            <form onSubmit={handleSubmit}>
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

export default MainAuth