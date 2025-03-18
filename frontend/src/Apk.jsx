import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useContext,useState } from 'react';
import Themeselector from './Themeselector';
import RegisterForm from './RegisterForm';
import Main from './Main';
import CAdmin from './components/Client/Admin/CAdmin';
import Table from './components/Table/Table'
import MainForm from './components/MainForm/MainForm';
import Datacontext from './Context/Datacontext';
import EAdmin from './components/EAdmin/EAdmin';
import Themedisplay from './Themedisplay';
import Auth from './components/Authentication/Auth';
import MainAuth from './components/Authentication/MainAuth';
function Apk() {
    const Context = useContext(Datacontext);
    const {Clients,Eventin,Registration} = Context;
    let {Theme} = Context;
    const cl = {
      Org_name: 'DUMMY',
      url: 'dummy',
      tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sint? Amet qui perspiciatis reiciendis ipsum excepturi quisquam accusantium magni itaque, consequatur, sequi officiis maxime vero at repudiandae provident ipsam commodi.',
      link1: 'abc',
      link2: 'abc',
      link3: 'abc'
    }
    const selector = [{Theme:1},{Theme:2}];
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
          <Route exact path='/Admin' element={<EAdmin/>}/>
          <Route exact path='/Login' element={<MainAuth/>}/>
          {selector.map((s,idx)=><Route key={idx} exact path= {'/Theme'+s.Theme} element={<Themedisplay cl = {cl} s={s}/>}/>)}
          {Eventin.map((event,idx)=><Route key={idx} exact path={'/'+event.Org_name+'/'+event.org_url} element={<MainForm event={event} key={idx}/>}/>)}
          {Clients.map((cl,idx)=><Route key={idx} exact path={'/'+cl._id+cl.url}  element={<Themeselector cl={cl} />}/>)}
          {Clients.map((cl,idx) => <Route key={idx} exact path = {'/'+cl._id+cl.url+'/Login'} element={<Auth cl={cl} />}/>)}
          {Clients.map((cl,idx)=><Route key={idx} exact path={'/' +cl._id+cl.url + '/Admin'}  element={<CAdmin cl={cl} Theme={Theme} />}/>)}
          {Eventin.map((event,idx)=> <Route exact key={idx} path={'/'+event.org_url+'/Response'} element={<Table Registration={Registration} event = {event} key={idx} />}/> )}
        </Routes>
      </Router>
    </>
  );
}

export default Apk;
