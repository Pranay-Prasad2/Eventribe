import React from 'react'

const Credentials = (props) => {
        const {State,setState,Step,setStep} = props;
        const onChange = (e) =>{
            setState({...State,[e.target.name]:e.target.value});
        }
        return (
            <div className= "indiv" data-active >
            <form className='frm' onSubmit={()=>{setStep(Step+1)}} >
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
                    <small>Password</small>
                    <input type="password" name='password' placeholder='Admin Password'  required  value={State.password} onChange={onChange} />
                </div>
                <button type='submit' id='sub_btn' className='btn btn-primary' >Next</button> 
            </form>
        </div>
    )
}

export default Credentials