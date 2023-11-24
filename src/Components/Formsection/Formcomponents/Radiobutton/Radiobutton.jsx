import React, { useState } from 'react'
import './Radiobutton.scss'
const Radiobutton = ({ user,selectedOption, setSelectedOption }) => {

    

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };
    return (
        <div>
            <div className='radiosection'>
                <label>{user.label}</label>
                <form>
                    {user.options.map((option) => (
                        <div key={option.id}> 
                            <input
                                type="radio"
                                id={option.id}
                                name="radioGroup"
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={() => handleOptionChange(option.value)}
                            />
                            <span htmlFor={option.id}>{option.value}</span>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default Radiobutton