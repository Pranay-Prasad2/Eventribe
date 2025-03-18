import React from 'react'
import './ClientAbout.css'
const ClientAbout = (props) => {
  const{cl} = props
  return (
      <section id='clientabout'>
          <div className="clientabout_container">
              <h2>About us</h2>
              <div className="clientabout_info">
                <p>{cl.about}</p>
              </div>
          </div>
      </section>
  )
}

export default ClientAbout