import React from 'react'
import './Thome.css'
import bg from '../images/hero-banner.png'
const Thome = () => {
  return (
      <article>
          <section className="Mhome" id="Mhome">
              <div className="container">
                  <div className="home_content">
                      <h2 className="home_title">Eventribe</h2>
                      <p className="home_text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quidem earum quis nemo quibusdam et placeat sequi tempora delectus maiores!
                      </p>
                      <a href='#about' ><button className='btn'>
                          Learn More
                      </button></a>
                  </div>
                  <figure className='home_banner'>
                      <img src={bg} width='694' height='529' loading='lazy' alt="bg" className='w-100 banner-animation'/>
                  </figure>
              </div>
          </section>
      </article>
  )
}

export default Thome