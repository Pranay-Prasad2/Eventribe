import React,{useState,useContext} from 'react'
import './CAEvent.css'
import Datacontext from '../../../../Context/Datacontext';
import MakeForm from '../../../MakeForm/MakeForm';
const CAEvent = (props) => {
    const { cl } = props;
    const {Show,setShow} = props;
    const Context = useContext(Datacontext);
    const {Eventin,DeleteEvent,DeleteEventinfo} = Context;
    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth()+1;
    const yy = d.getFullYear();
    const date_String = `${dd}-${mm}-${yy}`;
    return (
        <section className="CAEvent" id='CAEvent'>
            <div className="Event_logo">
                <h2>Host Event</h2>
            </div>
            <div className="new_event">
                <a href="#" className="new_event_btn" onClick={()=>setShow(Show^1)}>New Event</a>
            </div>
            <MakeForm Show={Show} setShow={setShow} cl={cl}  className='makeForm' />
            <ul className="event_info">
                <li className="event_card">
                    <h2>Running Event</h2>
                    <div className="event_table">
                        <table>
                            <thead className="event_holder">
                                <tr>
                                    <th>Name/Preview</th>
                                    <th>Description</th>
                                    <th>Responses</th>
                                    <th>Active toggle</th>
                                    <th>Delete event</th>
                                </tr>
                            </thead>
                            <tbody className="event_scroll">
                                    {Eventin.filter((ev,id)=>{return (ev.Org_name === cl.Org_name)}).map((event,idx)=>
                                        <tr className="event_col">
                                            <td>{event.eventname}</td>
                                            <td>{event.about}</td>
                                            <td>Data</td>
                                            <td>Active</td>
                                            <td className='Deletebutton' onClick={()=>{DeleteEvent(event.eventname);DeleteEventinfo(event.eventname)}}>Delete</td>
                                        </tr>
                                    )}
                                    
                            </tbody>
                        </table>
                    </div>
                </li>
                {/* <li className="event_card">
                    <h2>Archives</h2>
                    <div className="event_table">
                        <table>
                            <thead className="event_holder">
                                <tr>
                                    <th>Name/Preview</th>
                                    <th></th>
                                    <th>Description</th>
                                    <th>Delete event</th>
                                </tr>
                            </thead>
                            <tbody className="event_scroll">
                                    {Eventin.filter((ev,id)=>{return (ev.Org_name === cl.Org_name)}).map((event,idx)=>
                                        <tr className="event_col">
                                            <td>{event.eventname}</td>
                                            <td>Data</td>
                                            <td>Active</td>
                                            <td>Delete</td>
                                        </tr>
                                    )}
                                    
                            </tbody>
                        </table>
                    </div>
                </li> */}

            </ul>
        </section>
    )
}

export default CAEvent