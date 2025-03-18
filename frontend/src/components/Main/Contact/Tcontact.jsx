import React,{useRef,useState} from 'react'
import './Tcontact.css'
import emailjs from 'emailjs-com';
const Tcontact = () => {
    const form = useRef();
    const [ok, setOk] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cshkexo', 'template_0twmjpn', form.current, 'Afz5YLr1jWgSqyiSE',this)
          .then(function(){
            setOk(true);
            setTimeout(() => {
              setOk(false);
            }, 2000);
          },function(error){
            window.alert("Internal Error")
          })
        e.target.reset();
      };
  return (
      <section className="section tcontact" id="tcontact">
          <div className="container">
              <h2 className="h2 section_title underline">Contact US</h2>
              <div className="contact_container">
                  <form ref={form} onSubmit={sendEmail}>
                      <input type="text" name="name" placeholder='Your Full Name'/>
                      <input type="email" name="email" placeholder='Your Email Adress' />
                      <textarea name="message" id="message" placeholder='Your Message' rows="10" cols='30'></textarea>
                      <button className='button_submit'>Submit</button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Tcontact