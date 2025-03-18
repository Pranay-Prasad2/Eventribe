import React from 'react'
import './Rform.css'
import Credentials from './Credentials'
import Information from './Information'
import Payment from './Payment'
const Rform = (props) => {
        const {State,setState,Step,setStep} = props; 
        // const [Inputs, setInputs] = useState({OrganizationName:"",email:"",url:"",password:"",Cpassword:"",about:"",link1:"",link2:"",link3:""});
        switch (Step) {
            case 1:
                return (
                    <section className="section Register">
                        <div className="form_container">
                            <Credentials Step={Step} setStep={setStep} State={State} setState={setState} />
                        </div>
                    </section>
                );
            case 2:
                return (
                    <section className="section Register">
                        <div className="form_container">
                            <Information Step={Step} setStep={setStep} State={State} setState={setState} />
                        </div>
                    </section>
                );
            case 3:
                return (
                    <section className="section Register">
                        <div className="form_container">
                            <Payment Step={Step} setStep={setStep} State={State} setState={setState} />
                        </div>
                    </section>
                );
            default:
                break;
        }
}
export default Rform;
