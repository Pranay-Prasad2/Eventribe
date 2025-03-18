import React,{useContext} from 'react'
import './CAupdate.css'
import Datacontext from '../../../../Context/Datacontext';
const CAupdate = (props) => {
    const Context = useContext(Datacontext)
    const {Edit,setEdit,State,setState} = props;
    const {updateuser} = Context;
    const onChange = (e) =>{
        setState({...State,[e.target.name]:e.target.value});
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        updateuser(State.id,State.OrganizationName,State.url,State.email,State.password,State.about,State.link1,State.link2,State.link3,State.theme);
        setState({id:'',OrganizationName: '',url: '',email: '',password: '',about: '',link1: '',link2: '',link3: ''});
    }
  return (
      <div className="updateform" style={{display: Edit?'':'none'}}>
        <div className="indiv"  >
            <div className="update_header">
                <h1>Update Info</h1>
                <button onClick={()=>{setEdit(Edit^1)}}>close</button>
            </div>
            <form className='frm'>
                <div className="username">
                    <small>Organization Name</small>
                    <input type="text" name='OrganizationName' placeholder='Organization Name' required value={State.OrganizationName} onChange={onChange}   />
                </div>
                <div className="username">
                    <small>Email</small>
                    <input type="email" name='email' placeholder='Your Email'  required  value={State.email} onChange={onChange} />
                </div>
                <div className="username">
                    <small>Organization username (Included in URL)</small>
                    <input type="text" name='url' placeholder='Ex: Eventribe'  required value={State.url} onChange={onChange} />
                </div>
                <div className="username">
                    <small>About</small>
                    <textarea name="about" rows="7" placeholder='Describe your organization' required value={State.about} onChange={onChange} ></textarea>
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
                <div className="username">
                    <small>Change Password (Optional)</small>
                    <input type="password" name='password' placeholder='Change Admin Password'   value={State.password} onChange={onChange} />
                </div>
                <div className="prev_next">
                    <button type='submit' id='sub_btn' className='btn btn-primary update_btn' onClick={handlesubmit} >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CAupdate