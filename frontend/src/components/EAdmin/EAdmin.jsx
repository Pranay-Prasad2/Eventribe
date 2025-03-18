import React,{useContext} from 'react'
import './EAdmin.css'
import { useNavigate } from "react-router-dom";
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import {GrClose} from 'react-icons/gr'
import {BsGrid1X2Fill,BsFillMoonStarsFill} from 'react-icons/bs'
import {ImStatsBars,ImSun} from 'react-icons/im'
import {MdEventNote,MdAttachMoney} from 'react-icons/md'
import {FiUsers,FiTriangle} from 'react-icons/fi'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import {FaUsers,FaBars} from 'react-icons/fa'
import Datacontext from '../../Context/Datacontext';
const EAdmin =  () => {
    const navigate = useNavigate();
    const Context  = useContext(Datacontext);
    const {Clients,Eventin} = Context;
    const handlelogout = (e) =>{
        localStorage.removeItem('dis_blocker__1525455_12afrt89568er34');
        navigate('/');
    }
    const status = localStorage.getItem('dis_blocker__1525455_12afrt89568er34');
    if(!status){
        navigate('/Login')
        return;
    }
    const data = [0,0,0,0,0,0,0,0,0,0,0,0];
    Clients.map((client)=>{
        data[client.month]++;
    })
    console.log(data);
  return (
      <div className="EAdmin_main">
          <div className="Eadmin_container">
              <aside>
                  <div className="top">
                      <div className="Eadmin_logo">
                            <FiTriangle className='logo_icn'/>
                          <h2 className='h2'>Eventribe</h2>
                      </div>
                      <div className="Eadmin_close">
                            <GrClose/>
                      </div>
                  </div>

                  <div className="Eadmin_sidebar">
                      <a href="#insight" className='anchor_tag actives'>
                        <BsGrid1X2Fill className='icn'/>
                        <h3 className='h3'>Dashboard </h3>
                      </a>
                      <a href="#Users" className='anchor_tag'>
                        <FiUsers className='icn'/>
                        <h3 className='h3'>Users</h3>
                      </a>
                      <a href="#Events" className='anchor_tag'>
                        <MdEventNote className='icn'/>
                        <h3 className='h3'>Events</h3>
                      </a>
                      <a href="#" className='anchor_tag'>
                        <RiLogoutCircleRLine className='icn'/>
                        <h3 className='h3'> <a href="#" onClick={handlelogout}>Logout</a></h3>
                      </a>
                  </div>
              </aside>

              <main>
                  <h1 className="h1">Dashboard</h1>
                  <div className="insight" id='insight'>
                      <div className="users">
                          <FaUsers className='insight_icon'/>
                          <div className="middle">
                              <div className="left">

                              <h3 className='h3'>Total Users</h3>
                              <h1 className='h1'>{Clients.length}</h1>
                              </div>
                          <div className="progress">
                              <svg>
                                  <circle cx='38' cy='38' r='36'></circle>
                              </svg>
                              <div className="number">
                                  <p className='p'>{Clients.length}</p>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="Total_Events">
                          <ImStatsBars className='insight_icon'/>
                          <div className="middle">
                              <div className="left">

                              <h3 className='h3'>Total Events</h3>
                              <h1 className='h1'>{Eventin.length}</h1>
                              </div>
                          <div className="progress">
                              <svg>
                                  <circle cx='38' cy='38' r='36'></circle>
                              </svg>
                              <div className="number">
                                  <p className='p'>{Eventin.length}</p>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="revenue">
                          <MdAttachMoney className='insight_icon'/>
                          <div className="middle">
                              <div className="left">
                              <h3 className='h3'>Total Revenue</h3>
                              <h1 className='h1'>25</h1>
                              </div>
                          <div className="progress">
                              <svg>
                                  <circle cx='38' cy='38' r='36'></circle>
                              </svg>
                              <div className="number">
                                  <p className='p'>25</p>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
                    <div className="charts">
                        <h1 className="h1">User Registration</h1>
                        <Line className='mychart' data={{
                            labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
                            datasets:[{
                                label:'Users',
                                data:data,
                                fill:true,
                                backgroundColor: 'rgba(135, 155, 255, 0.838)',
                            }],

                        }} options={{
                            responsive:true,
                        }}/>
                    </div>
                  <div className="user_list" id='Users'>
                   <h1 className="h1">Users</h1>
                   <div className="table_main1">

                   <table className='user_table'>
                       <thead>
                           <tr>
                               <th>Organization Name</th>
                               <th>About</th>
                               <th>Joined</th>
                               <th>Acion</th>
                           </tr>
                       </thead>
                       <tbody className='table_body'>
                           {Clients.map((client,idx)=>
                            <tr>
                                <td>{client.Org_name}</td>
                                <td>{client.about}</td>
                                <td>{client.month + '-' +client.year}</td>
                                <td>Remove</td>
                            </tr>
                            )}
                       </tbody>
                   </table>
                   </div>
              </div>
                  <div className="user_list" id='Events'>
                   <h1 className="h1">Events</h1>
                   <div className="table_main1">
                   <table className='user_table'>
                       <thead>
                           <tr>
                               <th>Organization Name</th>
                               <th>Events Name</th>
                               <th>About</th>
                               <th>Acion</th>
                           </tr>
                       </thead>
                       <tbody className='table_body'>
                           {Eventin.map((event,idx)=>
                            <tr key={idx}>
                                <td>{event.Org_name}</td>
                                <td>{event.eventname}</td>
                                <td>{event.about}</td>
                                <td>Link</td>
                            </tr>
                            )}
                       </tbody>
                   </table>
                   </div>
              </div>
              </main>
            <div className="right">
                <div className="top">
                    <button id='right_btn'>
                        <FaBars/>
                    </button>
                    <div className="profile">
                        <FiTriangle/>
                    </div>
                </div>

                <div className="message">
                    <h4 className="h4">Welcome Admin</h4>
                </div>

                <div className="list_user">
                    <h2 className="h2">Users</h2>
                    {Clients.map((client,idx)=>
                        <div className="list">
                            <h3 className="h3">{client.Org_name}</h3>
                        </div>
                    )}
                </div>
            </div>

          </div>
      </div>
  )
}

export default EAdmin