import React,{useState} from 'react'
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdEventAvailable} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {FaSignOutAlt} from 'react-icons/fa'
import './CADashboard.css'
import CAupdate from '../CAupdate/CAupdate'
const CADashboard = (props) => {
  const {Show,setShow,Edit,setEdit,cl,State,setState} = props;

  return (
      <section className="Dashboard">
          <div className="Dashboard_logo">
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard_item">
              <ul className="dashboard_nav">
                  <li><a href="#CAEvent" className="dashboard_links"><h3>Events Hosted</h3> <p>759 </p></a></li>
                  <li><a href="#" className="dashboard_links" onClick={()=>setShow(Show^1)}><h3>Host Event</h3><MdEventAvailable className='dashboard_icon'/></a></li>
                  <li><a href="#" className="dashboard_links" onClick={()=>{setEdit(Edit^1);setState({id:cl._id,OrganizationName:cl.Org_name,email:cl.email,url:cl.url,about:cl.about,link1:cl.link1,link2:cl.link2,link3:cl.link3,theme:cl.theme})}}><h3>Edit Information</h3><FiEdit className='dashboard_icon'/></a></li>
                  <li><a href="#" className="dashboard_links"><h3>Signout</h3><FaSignOutAlt className='dashboard_icon'/></a></li>
              </ul>
              <CAupdate cl={cl} Edit={Edit} setEdit={setEdit} State={State} setState={setState}/>
          </div>
      </section>
  )
}

export default CADashboard