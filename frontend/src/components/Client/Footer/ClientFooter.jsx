import React from 'react'
import './ClientFooter.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram,BsLinkedin} from 'react-icons/bs'
import {ImYoutube} from 'react-icons/im'
const ClientFooter = (props) => {
  const {cl} = props;
  return (
    <footer id='footer'>
          <h1 href="#" className='footer__logo'>{cl.Org_name}</h1>
          <ul className='links links_nav'>
              <li><a href="#">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#events">EVENTS</a></li>
          </ul>
          <div className="footer__social">
              <a className='fb' href="https://www.facebook.com/pranay.prasad.9277"><FaFacebookSquare/></a>
              <a className='ins' href="https://www.instagram.com/pranay.prasad/"><BsInstagram/></a>
              <a className='li' href="https://twitter.com/PranayP19841306"><BsLinkedin/></a>
              <a className='Yu' href="https://twitter.com/PranayP19841306"><ImYoutube/></a>
          </div>
          <div className="footer__copyright">
              <small>&copy;{cl.Org_name}.All rights reserved.</small>
          </div>
    </footer>
  )
}

export default ClientFooter