import React,{useState,useContext} from 'react'
import './MakeForm.css'
import Datacontext from '../../Context/Datacontext'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
const MakeForm = (props) => {
    const Context = useContext(Datacontext);
    const {AddEvent,Addinfo} = Context;
    const {Show,setShow,cl} = props;
    const [Selector, setSelector] = useState(false)
    const [Type, setType] = useState('Default')
    const [Input_fields, setInput_fields] = useState([
        {Type:"Default",Disp:false,name:"t"}
    ])

    const [Data,setData] = useState([
        {
            "Org_name":"",
            "date":"",
            "eventname":"",
            "response":false,
            "org_url":"",
            "about":"",
            "method":"about"
        },
        {
            "type":"text",
            "label":"",
            "org_url":"",
            "option1":"",
            "option2":"",
            "option3":"",
            "option4":"",
            "option5":"",
            "method":"Question"
        }
    ]);
    const Que = {
        "type":"text",
        "org_url":Data[0].org_url,
        "label":"",
        "option1":"",
        "option2":"",
        "option3":"",
        "option4":"",
        "option5":"",
        "method":"Question"
    };
    const onChange = (index) => (e) =>{
        const newData = Data.map((item,i)=>{
            if(index === i){
                return {...item,[e.target.name]:e.target.value};
            }
            else{
                return item;
            }
        });
        setData(newData);
    }

    const handelclick = (el,Type,idx) =>{
        const list = [...Input_fields];
        list[idx].Type = Type; 
        Data[idx+1].type = Type;
        setSelector(Selector^1);
    };
    const handleAdd = (e) =>{
        setInput_fields([...Input_fields,{Input_div:"",Type:"Default"}]);
        setData(Data.concat(Que));
        console.log(Data.length);
        console.log(Data);
    }
    Data[0].Org_name = cl.Org_name;
    Data[0].org_url = Data[0].eventname+cl.url;
    Data[1].org_url= Data[0].org_url;   
    const [ischecked, setischecked] = useState(false);
    const handleresp = (e) =>{
        if(!ischecked){
            Data[0].response = true;
        }
        else{
            Data[0].response = false;
        }
        setischecked(!ischecked);
    }
    const Publishform = (e) =>{
        e.preventDefault();
        AddEvent(Data);
        Addinfo(Data[0].date,Data[0].Org_name,Data[0].eventname,Data[0].org_url,Data[0].about,Data[0].response);
        setInput_fields([{Type:"Default",Disp:false,name:"t"}])
        setData([
            {
                "Org_name":"",
                "date":"",
                "eventname":"",
                "response":false,
                "org_url":"",
                "about":""
            },
            {
                "type":"text",
                "label":"",
                "org_url":"",
                "option1":"",
                "option2":"",
                "option3":"",
                "option4":"",
                "option5":""
            }
        ]);
    }
    const d = new Date();
    const dt = d.getDate();
    const mm = d.getMonth()+1;
    const yy = d.getFullYear();
    const datestring = `${dt}-${mm}-${yy}`;
    Data[0].date = datestring;
  return (
      <section className="createform" style={{display: Show?'':'none'}}>
          <div className="container">
              <div className="editform_section">
                  Edit
              </div>
              <div className="createform_header">
                    <input type="text"  name='eventname' placeholder='Event Name' className='evenetname' value={Data[0].eventname} onChange={onChange(0)}/>
                    <button onClick={()=>setShow(Show^1)}>Close</button>
              </div>
              <div className="createform_about">
                  <textarea className='about_input' value={Data[0].about} onChange={onChange(0)} type="text" name='about' placeholder='About Event' cols="10" rows="3"></textarea>
              </div>
              <div className="control_form">
                  <div className="response_check">
                      <small>Response</small>
                    <label className='Response_switch'>
                      <input type="checkbox" id='response'checked={Data[0].response} onChange={handleresp} />
                      <span className='slider'></span>
                    </label>
                  </div>
                    <button className='Publish_from' onClick={Publishform}>Publish</button>
              </div>
              <div className="input_field">
                  {Input_fields.map((inp,idx)=>(
                      
                  <div key={idx} className="input_container">   
                      <div className="input_values">
                        <input type="text" value={Data.length-1>idx?Data[idx+1].label:Que.label} onChange={onChange(idx+1)} name='label' id='Input_div' placeholder='Title' className='input_header form_input'/>
                        <input type="text" style={{display: (inp.Type==='Default' || inp.Type==='Text')?'':'none'}} name='Input_div' id='Input_div' className='text_response form_input' />
                        <textarea name="text" style={{display: (inp.Type==='Longtext')?'':'none'}} className='form_text' id="text" cols="10" rows="3" placeholder='Enter Response'></textarea>
                        <div style={{display: (inp.Type==='Multiple')?'':'none'}} className="multiple_choice">
                            <ul className='multiple_ul2'>
                                <li>
                                    <input type="text" value={Data.length-1>idx?Data[idx+1].option1:Que.option1} onChange={onChange(idx+1)} name='option1' id='Input_div' placeholder='Option1' className='input_header form_input'/>
                                </li>
                                <li>
                                    <input type="text" value={Data.length-1>idx?Data[idx+1].option2:Que.option2} onChange={onChange(idx+1)} name='option2' id='Input_div' placeholder='Option2' className='input_header form_input'/>
                                </li>
                                <li>
                                    <input type="text" value={Data.length-1>idx?Data[idx+1].option3:Que.option3} onChange={onChange(idx+1)} name='option3' id='Input_div' placeholder='Option3' className='input_header form_input'/>
                                </li>
                                <li>
                                    <input type="text" value={Data.length-1>idx?Data[idx+1].option4:Que.option4} onChange={onChange(idx+1)} name='option4' id='Input_div' placeholder='Option4' className='input_header form_input'/>
                                </li>
                                <li>
                                    <input type="text" value={Data.length-1>idx?Data[idx+1].option5:Que.option5} onChange={onChange(idx+1)} name='option5' id='Input_div' placeholder='Option5' className='input_header form_input'/>
                                </li>
                            </ul>
                        </div>
                      </div>
                      <div className="input_selector">
                          <ul>
                              <li><button className='secondary_selector'  onClick={el => handelclick(el,"Text",idx)}>Text</button></li>
                              <li><button className='secondary_selector' onClick={el => handelclick(el,"Longtext",idx)}>Long text</button></li>
                              <li><button className='secondary_selector'  onClick={el => handelclick(el,"Multiple",idx)}>Multiplechoice</button></li>
                          </ul>
                      </div> 
                      <div className="input_icons">
                          <BsThreeDotsVertical className='icn'/>
                          <GrAddCircle onClick={handleAdd} className='icn'/>
                          <AiOutlineDelete onClick={()=>{const list = [...Input_fields];list.splice(idx,1);setInput_fields(list);const d = [...Data];d.splice(idx+1,1);setData(d)}} className='icn'/>
                      </div>
                  </div>
                  ))}
                      <button className='Input_Add_new' onClick={handleAdd}>Add New</button> 
              </div>
          </div>
      </section>
  )
}

export default MakeForm