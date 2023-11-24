import React, { useState } from 'react'
import './Dropdown.scss'
const Dropdown = ({ user,dOption, setDOption }) => {
  
 
  return (
    <div>
      <div className='ddsection'>
        <label>{user.label}</label><br/>
        <select
          value={dOption}
          onChange={(e) => setDOption(e.target.value)}
        >
          <option value="">Select...</option>
          {user.options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Dropdown