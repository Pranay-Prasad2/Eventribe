import React from 'react'
import {AiFillLinkedin,AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube} from 'react-icons/ai'
import './Tfooter.css'
const Tfooter = () => {
  return (
      <footer className='Tfooter'>
              <div className="footer_top">
                <div className="container">
                    <div className="footer_brand">
                        <a href="#" className="logo">Eventribe</a>
                    </div>
                        <ul className="navbar_list">
                            <li className="navbar_item"><a href="#home" className="navbar_link">Home</a></li>
                            <li className="navbar_item"><a href="#about" className="navbar_link">About</a></li>
                            <li className="navbar_item"><a href="#event" className="navbar_link">Events</a></li>
                            <li className="navbar_item"><a href="#contact" className="navbar_link">Contact</a></li>
                        </ul>
                        <ul className="social_list">
                            <li><a href="#" className="social_link"><AiFillLinkedin/></a></li>
                            <li><a href="#" className="social_link"><AiOutlineInstagram/></a></li>
                            <li><a href="#" className="social_link"><AiOutlineFacebook/></a></li>
                            <li><a href="#" className="social_link"><AiOutlineYoutube/></a></li>
                        </ul>
                    </div>
              </div>
                <div className="footer_bottom">
                    <p className="copyright">
                        &copy;<a href="#" className="copyright_link">Eventribe</a>. All rights reserved
                    </p>
                </div>
          
      </footer>
  )
}

export default Tfooter