import React,{useState} from 'react'
import CADashboard from './CADashboard/CADashboard'
import './CAdmin.css'
import CAEvent from './CAEvet/CAEvent'
import CANavbar from './CANavbar/CANavbar'
import CATheme from './CAThemeUpdate/CATheme'
import CAupdate from './CAupdate/CAupdate'
import { useNavigate } from "react-router-dom";
const CAdmin = (props) => {
    const {cl} = props;
    const navigate = useNavigate();

    let {Theme} = props;
    const [Show, setShow] = useState(false);
    const [Edit,setEdit] = useState(false);
    const [State,setState] = useState({
        id:'',
        OrganizationName: '',
        email: '',
        url: '',
        password: '',
        about: '',
        link1: '',
        link2: '',
        link3: '',
        theme: ''
      });
    if(!localStorage.getItem('Success') || localStorage.getItem('id') !== cl._id){
        navigate('/'+cl._id+cl.url+'/Login');
        return;
    }
    return (
        <div className='CAdmin'>
            <CANavbar cl={cl}/>
            <div className="interface">
                <CADashboard cl={cl} Show={Show} setShow={setShow} Edit={Edit} setEdit={setEdit} State={State} setState={setState} />
                <CAEvent cl = {cl} Show={Show} setShow={setShow} />

                <CATheme cl={cl} Theme={Theme} State={State} setState={setState} />
                {/* <CAupdate/> */}
            </div>
        </div>
    )
}

export default CAdmin