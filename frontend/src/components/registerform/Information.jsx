import React,{useContext} from 'react'
import Datacontext from '../../Context/Datacontext';
import { useNavigate } from "react-router-dom";
const Information = (props) => {
    const {State,setState,Step,setStep} = props;
    const navigate = useNavigate();
    const Context = useContext(Datacontext);
    const {Addusers} = Context;
    const d = new Date();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    State.month = month;
    State.year = year;
    const onChange = (e) =>{
        setState({...State,[e.target.name]:e.target.value});
    }
    const handleclick= (e) =>{
        e.preventDefault();
        Addusers(State.month,State.year,State.OrganizationName,State.url,State.email,State.password,State.about,State.tagline,State.link1,State.link2,State.link3);
        setState({month:'',year:'',OrganizationName: '',email: '',url: '',password: '',tagline: '',about: '',link1: '',link2: '',link3: ''});
        navigate('/');

    }
        return (
            <div className="indiv"  >
                    <form className='frm' onSubmit={()=>{setStep(Step+1)}}>
                        <div className="username">
                            <small>About</small>
                            <textarea name="about" rows="7" placeholder='Describe your organization' required value={State.about} minLength = {30} maxLength={60} onChange={onChange} ></textarea>
                        </div>
                        <div className="username">
                            <small>Tagline</small>
                            <input type="text" name='tagline' placeholder='Linkedin Url' required value={State.tagline} onChange={onChange}  />
                        </div>
                        <div className="username">
                            <small>Linkedin url</small>
                            <input type="text" name='link1' placeholder='Linkedin Url' required value={State.link1} onChange={onChange}  />
                        </div>
                        <div className="username">
                            <small>Facebook url</small>
                            <input type="text" name='link2' placeholder='Facebook Url' required value={State.link2} onChange={onChange}  />
                        </div>
                        <div className="username">
                            <small>Instagram url</small>
                            <input type="text" name='link3' placeholder='Instagram Url' required value={State.link3} onChange={onChange}/>
                        </div>
                        <div className="prev_next">
                            <button type='prev' id='sub_btn' className='btn btn-primary' onClick={()=>setStep(Step-1)} >Prev</button>
                            <button type='submit' id='sub_btn' className='btn btn-primary'>Next</button>
                        </div>
                    </form>
                </div>
  )
}

export default Information