import React,{useContext} from 'react'
import Datacontext from '../../Context/Datacontext';
import axios from "axios";
import './Rform.css'
import { useNavigate } from "react-router-dom";
const Payment = (props) => {
    const {State,setState,Step,setStep} = props;
    const navigate = useNavigate();
    const Context = useContext(Datacontext);
    const {Addusers} = Context;
    // function showRazorpay(){

    //     <form action="https://www.example.com/payment/success/" method="POST">
    //         <script
    //         src="https://checkout.razorpay.com/v1/checkout.js"
    //         data-key="YOUR_KEY_ID" // Enter the Key ID generated from the Dashboard
    //         data-amount="50000" // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers
    //         data-currency="INR"
    //         data-order_id="order_Cgmcj Rh9ti2lP7"// This is a sample Order ID. Pass the ` id` obtained in the res}
    //         data-buttontext="Pay with Razorpay"
    //         data-name="Acme Corp"
    //         data-description="Test transaction"
    //         data-image="https://example.com/your_logo.jpg"
    //         data-prefill.name="Gaurav Kumar"
    //         data-prefill.email="gaurav.kumar@example.com"
    //         data-prefill. contact="9999999999"
    //         data-theme.color="#F37254">
    //         </script>
    //         <input type="hidden" custom="Hidden Element" name="hidden">
    //     </form>
    // }
    const handleclick= (e) =>{
        e.preventDefault();
        Addusers(State.month,State.year,State.OrganizationName,State.url,State.email,State.password,State.about,State.tagline,State.link1,State.link2,State.link3);
        setState({month:'',year:'',OrganizationName: '',email: '',url: '',password: '',tagline: '',about: '',link1: '',link2: '',link3: ''});
        navigate('/');

    }
  return (
      <div className="payment_main">
          <div className="modal">
              <h1>Payable Amount</h1>
              <h2>10Rs</h2>
          </div>
          <div className="paymentbuttons">
              <button className="pay_button proceed" onClick={handleclick}><a href="https://rzp.io/i/pafdXCQ1W" target='_blank'> Proceed to pay</a></button>
              <button className="pay_button cancel" onClick={()=>{navigate('/')}}>Cancel</button>
          </div>
      </div>
  )
}

export default Payment