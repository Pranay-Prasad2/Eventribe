import React from 'react'
import ClientAbout from '../Client/About/ClientAbout';
import ClientFooter from '../Client/Footer/ClientFooter';
import Home from '../Client/Home/Home';
import Navbar from '../Client/Navbar/ClientNavbar'
import Stats from '../Client/Stats/Stats';

const Client = (props) => {
    const {cl} = props;
  return (
      <>
        <Navbar cl={cl} />
        <Home cl={cl}/>
        <ClientAbout cl={cl}/>  
        <Stats cl={cl}/>
        <ClientFooter cl={cl}/>
      </>
  )
}

export default Client