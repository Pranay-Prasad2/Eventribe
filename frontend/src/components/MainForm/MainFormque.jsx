import React,{useState,useContext} from 'react'
import Datacontext from '../../Context/Datacontext';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
const MainFormque = (props) => {
    const Context = useContext(Datacontext);
    const {AddRegistration} = Context;
    const{Ans,setAns,questions,d,current,setcurrent,idx} = props;
    const vis = new Set();
    const next = (e) =>{
        e.preventDefault();
        if(current === questions.length-1){
            AddRegistration(Ans);
            setAns({
                "Org_url" : ""
            });
            current = 0;
            vis.clear();
        }
        else{
            if(vis.has(current+1)){
                vis.add(current+1);
                Ans[questions[current+1].label]="";
            }
            setcurrent(current < questions.length?current+1:current);
        }
    }
    const prev = (e) =>{
        e.preventDefault();
        setcurrent(current-1);
    }
    
    const onchange1 = (e) =>{
        setAns({...Ans,[e.target.name]:e.target.value});
    }
    const [Opt, setOpt] = useState(-1);
    return (
        <div className='typ_frm typ_frm-active' style={{ display: idx === current ? '' : 'none' }} id='typ_frm' key={idx}>
            <div className="frm_about" style={{ display: d.method === 'about' ? '' : 'none' }}>
                <h2 className='eventname'>{d.eventname}</h2>
                <p className='eventabout'>{d.about}</p>
            </div>
            <div className="questions" style={{ display: d.method === 'about' ? 'none' : '' }}>
                <label htmlFor="txt" className='inp_label'>{d.label}</label>
                <input placeholder='Type Your answer here....' style={{ display: d.type === 'Text' ? '' : 'none' }} className='Typeform_inp' type={d.type} id='txt' name={d.type==='Text'?d.label:'inp'} value={Ans[d.label]} onChange={onchange1} />
                <textarea style={{ display: d.type === 'Longtext' ? '' : 'none' }} className='typeform_inp' placeholder='Enter Response' name={d.type==='Longtext'?d.label:'inp'} id="ans" cols="30" rows="10" value={Ans[d.label]} onChange={onchange1}></textarea>
                <div style={{ display: (d.type === 'Multiple' ? '' : 'none') }} className="multiple_choice_inp">
                    <ul className='multiple_ul'>
                        <li className={Opt === 1 ?'mcq_option selected':'mcq_option'} onClick={()=>{Ans[d.label] = d.option1;setOpt(1)}} style={{ display: (d.option1 !== '') ? '' : 'none' }}>{d.option1}</li>
                        <li className={Opt === 2 ?'mcq_option selected':'mcq_option'} onClick={()=>{Ans[d.label] = d.option2;setOpt(2)}} style={{ display: (d.option2 !== '') ? '' : 'none' }}>{d.option2}</li>
                        <li className={Opt === 3 ?'mcq_option selected':'mcq_option'} onClick={()=>{Ans[d.label] = d.option3;setOpt(3)}} style={{ display: (d.option3 !== '') ? '' : 'none' }}>{d.option3}</li>
                        <li className={Opt === 4 ?'mcq_option selected':'mcq_option'} onClick={()=>{Ans[d.label] = d.option4;setOpt(4)}} style={{ display: (d.option4 !== '') ? '' : 'none' }}>{d.option4}</li>
                        <li className={Opt === 5 ?'mcq_option selected':'mcq_option'} onClick={()=>{Ans[d.label] = d.option5;setOpt(5)}} style={{ display: (d.option5 !== '') ? '' : 'none' }}>{d.option5}</li>
                    </ul>
                </div>
            </div>
            <div className="nav_btn">
                <button disabled={current === 0 ? true : false}  className='btn1 pre' onClick={prev} id='prev'><IoIosArrowBack /></button>
                <button className='btn1 nxt' onClick={next} id='next'>{current===questions.length-1?"Submit":<IoIosArrowForward />}</button>
            </div>
        </div>
    )
}

export default MainFormque