import React, {useState } from 'react'
import Tfooter from './components/Main/Footer/Tfooter'
import TempNavbar from './components/Main/Navbar/TempNavbar'
import Rform from './components/registerform/Rform'
import Steper from './components/registerform/Steper'

const  RegisterForm = () =>{
  const [Step,setStep] = useState(1);
  const [State,setState] = useState({
    month:'',
    year:'',
    OrganizationName: '',
    email: '',
    url: '',
    password: '',
    tagline: '',
    about: '',
    link1: '',
    link2: '',
    link3: ''
  });
    return (
      <>
        <TempNavbar />
        <Steper Step={Step} setStep={setStep} />
        <Rform Step={Step} setStep={setStep} State = {State} setState={setState} />
        <Tfooter />
      </>
    )
}
export default RegisterForm