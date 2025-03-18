import React from 'react'
import './Buymecoffee.css'
import {DiCoffeescript} from 'react-icons/di'
const Buymecoffee = () => {
  return (
      <a href="#" className='buy_coffee visible' aria-label='Buy Me a Coffee'>
          <DiCoffeescript className='coffee_icon'/>
      </a>
  )
}

export default Buymecoffee