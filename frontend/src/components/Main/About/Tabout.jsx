import React,{useContext}from 'react'
import './Tabout.css'
import about_banner from '../images/about-banner.png';
import Datacontext from '../../../Context/Datacontext';
const Tabout = () => {
    const Context = useContext(Datacontext);
    const {Clients,Eventin} = Context;
  return (
      <section className='section tabout' id='about'>
          <div className="container">
              <figure className='about_banner'>
                  <img className='w-100 banner-animation' src={about_banner} alt="about" width='700' height='532' loading='lazy' />
              </figure>
              <div className="about_content">
                  <h2 className="h2 section_title underline">About us</h2>
                  <p className="about_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum natus architecto possimus similique velit nemo dignissimos esse sint suscipit. Dolorem soluta veritatis eius officiis adipisci quaerat esse odit repellat!</p>

                  <ul className="stats_list">
                      <li className="stats_card">
                          <p className="h3 stats_title">{Clients.length}</p>
                          <p className="stats_text">Clients</p>
                      </li>
                      <li className="stats_card">
                          <p className="h3 stats_title">{Eventin.length}</p>
                          <p className="stats_text">Events</p>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
  )
}

export default Tabout