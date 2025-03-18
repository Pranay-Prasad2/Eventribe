import React,{useContext} from 'react'
import './CATheme.css'
import ThemeA from './ThemeA.png'
import Datacontext from '../../../../Context/Datacontext'
const CATheme = (props) => {
    const Context = useContext(Datacontext);
    const {updateuser} = Context;
    let {cl,State,setState} = props;
    // setState({id:cl._id,OrganizationName:cl.Org_name,email:cl.email,url:cl.url,about:cl.about,link1:cl.link1,link2:cl.link2,link3:cl.link3,theme:cl.theme});
  return (
      <div className="CATheme_main">
          <h2>Themes</h2>
          <div className="theme_display">
              <div className="theme_card">
                  <div className="image">
                      <img src={ThemeA} alt="Theme" />
                  </div>
                  <div className="action">
                      <button ><a href='/Theme1' target="_blank">Preview</a></button>
                      <button className={cl.theme === 1?'active':''} onClick={()=>{updateuser(cl._id,cl.Org_name,cl.url,cl.email,'',cl.about,cl.link1,cl.link2,cl.link3,1);Location.reload()}}>Select</button>
                  </div>
              </div>
              <div className="theme_card">
                  <div className="image">
                    <img src={ThemeA} alt="Theme" />
                  </div>
                  <div className="action">
                      <button ><a href="/Theme2" target="_blank">Preview</a></button>
                      <button className={cl.theme === 2?'active':''} onClick={()=>{updateuser(cl._id,cl.Org_name,cl.url,cl.email,'',cl.about,cl.link1,cl.link2,cl.link3,2);Location.reload()}}>Select</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CATheme