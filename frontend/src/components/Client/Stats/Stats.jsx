import React,{useContext} from 'react'
import './Stat.css'
import Datacontext from '../../../Context/Datacontext'
const Stats = (props) => {
    const {cl} = props;
    const Context = useContext(Datacontext)
    const {Eventin} = Context;
  return (
    <div className="Stat_main" id='Events'>
        <h2>Current Events</h2>
        <div className="table_main">
            <table>
                <thead>
                    <tr>
                    <th>Event Name</th>
                    <th>Description</th>
                    <th>Register</th>
                    </tr>
                </thead>
                <tbody>
                    {Eventin.filter((ev,id)=>{return (ev.Org_name === cl.Org_name)}).map((event,idx)=>
                        <tr>
                            <td>{event.eventname}</td>
                            <td>{event.about}</td>
                            <td>Register</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Stats