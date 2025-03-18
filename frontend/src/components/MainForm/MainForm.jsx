import React,{useState,useContext} from 'react'
import './MainForm.css'
import bg from './bg.jpg'
import Datacontext from '../../Context/Datacontext'
import MainFormque from './MainFormque'
const MainForm = (props) => {
    const {event} = props;
    const [current,setcurrent] = useState(0);
    const Context = useContext(Datacontext);
    const {Events} = Context;
    const questions = [];
    Events.map((ev)=>{
        if(ev.org_url === event.org_url){
            questions.push(ev);
        }
        return;
    })
    const [Ans,setAns] = useState(
        {
            "Org_url" : ""
        }
    );
    Ans.Org_url = questions[0].org_url;
    return (
      <div className='MainForm'>
          <img src={bg} alt="" />
          <section className="container MainSection">
              <form className="formArea" id='formArea'>
                  {questions.map((d,idx)=>
                            <MainFormque Ans={Ans} setAns={setAns} questions={questions} d={d} key={idx} idx={idx} current={current} setcurrent={setcurrent}/>
                  )}
                  
                  {/* <div className="typ_frm" id='typ_frm'>
                      <label htmlFor="txt">Name</label>
                      <input className='Typeform_inp' type="text" id='txt'/>
                  </div>
                  <div className="typ_frm" id='typ_frm'>
                      <label htmlFor="txt">Name</label>
                      <input className='Typeform_inp' type="text" id='txt'/>
                  </div> */}

              </form>
          </section>
          <script>

          </script>
      </div>

    )
}

export default MainForm