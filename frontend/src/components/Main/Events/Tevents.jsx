import React,{useContext} from 'react'
import './Tevents.css'
import Datacontext from '../../../Context/Datacontext';
import { BiLinkExternal } from 'react-icons/bi'
const Tevents = () => {
    const Context = useContext(Datacontext);
    const {Clients,Eventin} = Context;
    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth()+1;
    const yy = d.getFullYear();
    const date_String = `${dd}-${mm}-${yy}`;
    const event = Eventin.filter((ev)=>{return ev.date >= date_String});
    return (
        <section className="section Tevents" id="Tevents">
            <div className="eventcontainer">
                <h2 className="h2 section_title underline">Events</h2>
                <ul className="Event_list">
                    <li>
                        <div className="Event_card">
                            <h3 className="h3 title">Upcoming Events</h3>
                            <div className="Event_card_child">
                                <div style={{display: event.length > 0?'none':''}} className="no_item">
                                    <h4>No Event running</h4>
                                </div>
                                {Eventin.filter((ev)=>{return ev.date >= date_String}).map((event,idx)=>
                                    <div className="event_items event_item2">
                                        <h4>{event.Org_name}</h4>
                                        <h4>{event.eventname}</h4>
                                        <p>{event.about}</p>
                                        <a href={'/'+event.Org_name+'/'+event.org_url}><BiLinkExternal /></a>
                                    </div>
                                )}
                                
                                {/* <div className="event_items">
                                    <h4>Blaze</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <BiLinkExternal />
                                </div>
                                <div className="event_items">
                                    <h4>Blaze</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <BiLinkExternal />
                                </div>
                                <div className="event_items">
                                    <h4>Blaze</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <BiLinkExternal />
                                </div>
                                <div className="event_items">
                                    <h4>Blaze</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <BiLinkExternal />
                                </div> */}
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="Event_card">
                            <h3 className="h3 title">Organizations</h3>
                            <div className="Event_card_child">
                                <div style={{display: Clients.length > 0?'none':''}} className="no_item">
                                    <h4>No Orgainsation</h4>
                                </div>
                                {Clients.map((client,idx)=>
                                    <div key={idx} className="event_items">
                                        <h4>{client.Org_name}</h4>
                                        <p>{client.about}</p>
                                        <a href={'/'+client._id+client.url} target="_blank"><BiLinkExternal /></a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}


// User data



//Event information


//Servey Data



export default Tevents