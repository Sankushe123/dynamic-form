import React, { useState } from 'react';
import "./Checkbox.scss"
const Checkbox = ({user,selectedCheckboxes, setSelectedCheckboxes}) => {
  // Sample JSON data with id and value properties

  // State to manage the selected checkboxes
  

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    // Check if the checkbox is already selected
    const isSelected = selectedCheckboxes.includes(id);

    // Update the state based on the current state
    if (isSelected) {
      setSelectedCheckboxes(selectedCheckboxes.filter((checkboxId) => checkboxId !== id));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
    }
  };

  return (
    <div className='checksection'>
      <label>{user.label}</label>
      <div className='checkitems'>
        {user.options.map((item) => (
            <div key={item.id} >
            <input
                type="checkbox"
                id={item.id}
                checked={selectedCheckboxes.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
            />
            <span htmlFor={item.id}>{item.value}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Checkbox;
