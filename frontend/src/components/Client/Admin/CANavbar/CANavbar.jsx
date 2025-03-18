import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdEventAvailable} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {FaSignOutAlt} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
import Datacontext from '../../../../Context/Datacontext'
import './CANavbar.css'
const CANavbar = (props) => {
    let navigate = useNavigate();
    const {cl} = props
    const Context = useContext(Datacontext);
    const {Deleteuser} = Context;
    const handledelete = (e) =>{
        Deleteuser(cl._id);  
            // DeleteEvent(event.org_url);
            // DeleteEventinfo(event.org_url);
        navigate('/');
    }
  return (
      <section className="CANavbar">
          <div className="CA_logo">
              <h2>{cl.Org_name}</h2>
          </div>
          <ul className="CA_nav_links">
              <li><AiOutlineDashboard className='CA_nav_icon'/><a href="#" className="CA_nav_item">Dashboard</a></li>
              <li><MdEventAvailable className='CA_nav_icon'/><a href="#" className="CA_nav_item">Host Event</a></li>
              <li><FiEdit className='CA_nav_icon'/><a href="#" className="CA_nav_item">Edit Information</a></li>
              <li><FaSignOutAlt className='CA_nav_icon'/><a href="#" className="CA_nav_item" onClick={()=>{localStorage.clear();navigate('/'+cl._id+cl.url)}}>Signout</a></li>
              <li><RiDeleteBin5Line className='CA_nav_icon'/><a href="#" className="CA_nav_item" onClick={handledelete}>Delete Account</a></li>
          </ul>
      </section>
  )
}

export default CANavbar