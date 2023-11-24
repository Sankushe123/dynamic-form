import React, { useState } from 'react'
import './Textinput.scss'
const Textinput = ({user,input,setInput}) => {
    
  return (
    <div>
        <div className="inputsection">
            <label>{user.label}</label><br/>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
        </div>
       
      
    </div>
  )
}

export default Textinput