import React from 'react'
import './Rform.css'
const Steper = (props) => {
    const {Step,setStep} = props;
  return (
    <div className="steper_div">
    <div className="steper_align">
      <div className={Step >= 1?"step step1":"step"}>
          <div className="step_elements">
              <div className="circle"><div className="lineep"></div><h4 className='circle_head'>1</h4><div className={Step >= 1?"lines lines1":"lines"}></div></div>
              
              <small className='step_info'>Credentials</small>
          </div>
          <div className={Step >= 2?"line line1":"line"}></div>
      </div>
      <div className={Step >= 2?"step step1":"step"}>
          <div className={Step >= 2?"line line1":"line"}></div>
          <div className="step_elements">
              <div className="circle"><div className={Step >= 2?"lines lines1":"lines"}></div><h4 className='circle_head'>2</h4><div className={Step >= 2?"lines lines1":"lines"}></div></div>
              <small className='step_info'>Information</small>
          </div>
          <div className={Step === 3?"line line1":"line"}></div>
      </div>
      <div className={Step === 3?"step step1":"step"}>
          <div className={Step === 3?"line line1":"line"}></div>
          <div className="step_elements">
          <div className="circle"><div className={Step === 3?"lines lines1":"lines"}></div><h4 className='circle_head'>3</h4><div className="lineep"></div></div>
              <small className='step_info'>Payment</small>
          </div>
      </div>
    </div>
</div>
  )
}

export default Steper