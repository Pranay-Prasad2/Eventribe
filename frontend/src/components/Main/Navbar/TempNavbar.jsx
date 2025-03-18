import React,{useState,useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import './TempNavbar.css'
const TempNavbar = () => {
    const [Click, setClick] = useState(false);
    const [Scrollbar, setScrollbar] = useState(false);
    const changeNav = ()=>{
      if(window.scrollY >= 80){
        setScrollbar(true);
      }
      else{
        setScrollbar(false);
      }
    }
    useEffect(()=>{
      window.addEventListener('scroll',changeNav);
    },[]);
  return (
      <header className={Scrollbar?'header active1':'header'}>
          <div className="container">
              <div className={Click?"overlay active1":"overlay"} data-overlay></div>
              <a href="#"><h1 className="logo">Eventribe</h1></a>
              <nav className={Click?"Tnavbar active1":"Tnavbar"}>
                  <div className="navbar-top">
                      <a href="/#" className="logo">Eventribe</a>
                      <button className="nav-close-btn" aria-label='Close Menu' onClick={()=>{setClick(false)}}><AiOutlineClose/></button>
                  </div>
                  <ul className="navbar_list">
                      <li className="navbar_item"><a href="/#" className="navbar_link" onClick={()=>{setClick(false)}}>Home</a></li>
                      <li className="navbar_item"><a href="/#about" className="navbar_link" onClick={()=>{setClick(false)}}>About</a></li>
                      <li className="navbar_item"><a href="/#features" className="navbar_link" onClick={()=>{setClick(false)}}>Features</a></li>
                      <li className="navbar_item"><a href="/#Tevents" className="navbar_link" onClick={()=>{setClick(false)}}>Events</a></li>
                      <li className="navbar_item"><a href="/#tcontact" className="navbar_link" onClick={()=>{setClick(false)}}>Contact</a></li>
                      <li className="navbar_item last_child"><a href="/Admin" className="navbar_link" onClick={()=>{setClick(false)}}>Admin</a></li>
                      <li className="navbar_item last_child"> <a href="/register" className="btn">
                            <IoIosArrowForward className='forward-outline' aria-hidden='true' />
                            <span>Create Account</span>
                        </a></li>
                  </ul>
              </nav>
              <button className="nav-open-btn" aria-label='Open menu' onClick={()=>{setClick(true)}}>
                  <AiOutlineMenu/>
              </button>
          </div>
      </header>
  )
}

export default TempNavbar