import React, { useState,useEffect } from 'react'
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'
import './ClientNavbar.css'
const Navbar = (props) => {
    const {cl} = props;
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
        <nav className={Click?'navbar_s nav_active':'navbar_s'} id = {Scrollbar?'nav_scroll':''}>
            <div className="navbar_container">
                <h2 className={Scrollbar?"navbar_logo nav_col":"navbar_logo"}>{cl.Org_name}</h2>
                <div className={Scrollbar?"menu_icon menu_icon_col":"menu_icon"} onClick={() => setClick(!Click)}>
                    {Click ? <AiOutlineClose /> : <BiMenu />}
                </div>
            </div>
            <ul className={Click?'nav_menu active':'nav_menu'}>
                <li className='nav-item' ><a href="#">Home</a></li>
                <li className='nav-item' ><a href="#clientabout">About</a></li>
                <li className='nav-item' ><a href="#Events">Events</a></li>
                <li className='nav-item' ><a href="#footer">Contact</a></li>
                <li className='nav-item admin_nav' ><a href={"/"+cl._id+cl.url+"/Admin"}>Admin</a></li>
            </ul>
        </nav>
    )
}
// 

export default Navbar