import React, { useState } from 'react'
import './Textarea.scss'
const Textarea = ({user,message,setMessage}) => {
    
  return (
    <div>
        <div className='textareasection'>
            <label>{user.label}</label>
            
        </div>
        <textarea placeholder='message' rows={5} cols={32} onChange={(e)=>setMessage(e.target.value)}></textarea>

        {message}
    </div>
  )
}

export default Textarea