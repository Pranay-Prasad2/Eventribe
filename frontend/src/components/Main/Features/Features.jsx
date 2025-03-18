import React from 'react'
import './Features.css'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineForm} from 'react-icons/ai'
import {RiAdminFill} from 'react-icons/ri'
import {GiArchiveRegister} from 'react-icons/gi'
import featurebg from '../images/feautres-banner.png'
const Features = () => {
  return (
      <section className="section features" id="features">
          <div className="container">
              <h2 className="h2 section_title underline">Our features</h2>
              <ul className="features_list">
                  <li>
                      <div className="features_card">
                          <div className="icon">
                              <CgWebsite name='web_outline'/>
                          </div>
                          <div className="content">
                              <h3 className="h3 title">Responsive Organization Website</h3>
                              <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quasi?</p>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="features_card">
                          <div className="icon">
                              <GiArchiveRegister name='web_outline'/>
                          </div>
                          <div className="content">
                              <h3 className="h3 title">Get Website with simple Form</h3>
                              <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quasi?</p>
                          </div>
                      </div>
                  </li>
              </ul>
              <figure className="features_banner">
                  <img src={featurebg} alt="feature_banner" width='369' height='318' loading='lazy' className='w-100 banner-animation' />
              </figure>
              <ul className="features_list">
                  <li>
                      <div className="features_card">
                          <div className="icon">
                              <RiAdminFill name='web_outline'/>
                          </div>
                          <div className="content">
                              <h3 className="h3 title">Admin Dashboard</h3>
                              <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quasi?</p>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="features_card">
                          <div className="icon">
                              <AiOutlineForm name='web_outline'/>
                          </div>
                          <div className="content">
                              <h3 className="h3 title">User Registration Custom Form</h3>
                              <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quasi?</p>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
  )
}

export default Features