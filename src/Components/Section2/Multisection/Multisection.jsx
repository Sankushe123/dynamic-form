import React, { useState } from 'react';
import Addsection from '../Addsection/Addsection';
import { useDispatch,useSelector  } from 'react-redux';
import {removeFormField} from './../../../Context/Slice/Reducer'
import './Multisection.scss'
const Multisection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.formSchema.formField);
  
  
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const addInputField = () => {
    const newInputFields = [...inputFields, { id: inputFields.length + 1, value: '' }];
    setInputFields(newInputFields);
  };

  const removeInputField = (id) => {
    const updatedInputFields = inputFields.filter(field => field.id !== id);
    setInputFields(updatedInputFields);
  };

  const handleInputChange = (id, value) => {
    const updatedInputFields = inputFields.map(field => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };
  console.log('State fields : ',inputFields);
  console.log("State data",data[0]);




  return (
    <div className='multicontainer'>
      {inputFields.map((field) => (
        <div key={field.id} className='multifield'>
          <Addsection onChange={(e) => handleInputChange(field.id, e.target.value)}  />
          <button className='delbtn' 
          onClick={() => 
          {removeInputField(field.id),
          dispatch(removeFormField(field.id)),
          console.log("Fieeld id :",field.id)
          }
          }>Delete Section</button>
        </div>
      ))}
      <button className="addsectionbtn" onClick={addInputField}>Add Section</button>
      
    </div>
  );
};

export default Multisection;
