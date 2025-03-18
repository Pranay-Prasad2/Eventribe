import React from 'react'
import Tabout from './components/Main/About/Tabout'
import Buymecoffee from './components/Main/Buymecoffe/Buymecoffee'
import Tcontact from './components/Main/Contact/Tcontact'
import Tevents from './components/Main/Events/Tevents'
import Features from './components/Main/Features/Features'
import Tfooter from './components/Main/Footer/Tfooter'
import Thome from './components/Main/Home/Thome'
import TempNavbar from './components/Main/Navbar/TempNavbar'

const Temp = () => {
  return (
    <>
        <TempNavbar/>
        <Thome/>
        <Tabout/>
        <Features/>
        <Tevents/>
        <Tcontact/>
        <Tfooter/>
        <Buymecoffee/>
    </>
  )
}

export default Temp