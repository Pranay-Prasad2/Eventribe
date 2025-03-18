import React from 'react'
import './Home.css'
import bg from './bg.jpg'
const Home = (props) => {
  const {cl} = props;
  return (
      <section id='home'>
        <div className="bg">
          <img className='bgimg' src={bg} alt="bg" />
        </div>
          <div className="home_heading">
            <h1>{cl.Org_name}</h1>
            <h3>{cl.tagline}</h3>
          </div>
          <div className="home_btn">
            <button className='btn_client'> <a href="#Events">Events</a></button>
          </div>
      </section>
  )
}

export default Home