import React,{useContext,useState} from 'react'
import resp from '../../Response.json'
import './Table.css'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Datacontext from '../../Context/Datacontext';
const Table = (props) => {
    const { event,Registration } = props;
    const Context = useContext(Datacontext);
    const {DeleteEvent} = Context;
    if(Registration.length === 0) return;
    let respo = Registration.filter(function (el){
        return el.Org_url === event.org_url;
    });
    console.log(respo);
    const handledelete = (e) =>{
        e.preventDefault();
        DeleteEvent(event.org_url);
    }
    let arr;
    if(respo.length > 0){
        arr =  Object.getOwnPropertyNames(respo[0]);
        arr.shift();    
        arr.shift(); 
    }
   
    return (
        <section className="Table_section">
            <div className="table_main2">
                <div className="table_headers">
                    <h1>Responses</h1>
                </div>
                <div className="table_container">   
                    <table id='Response_table'>
                        <tr>
                            {arr.map((a) => <th>{a}</th>)}
                        </tr>
                        {respo.map((item)=>
                            <tr>
                                {arr.map((x)=> <td>{item[`${x}`]}</td> )}
                            </tr>
                        )}
                    </table>

                </div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="Response_table"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                {/* <button type='button' onClick = {tableToCSV()} >Download Table</button> */}
            </div>
        </section>
    )
}

export default Table