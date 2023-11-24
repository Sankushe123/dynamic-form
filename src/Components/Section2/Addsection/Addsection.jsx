import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField ,removeFormField } from './../../../Context/Slice/Reducer';
import './Asssectioncss.scss'
const Addsection = () => {

    const dispatch = useDispatch();
   
    const [labelname , setLabelname] = useState('') 
    const [selectedField, setSelectedField] = useState('');
    const fields = ['Dropdown', 'RadioButton', 'CheckBox', 'TextArea', 'TextInput'];
    
    const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

    const handleFieldChange = (e) => {
        console.log(e);
        setSelectedField(e.target.value);
    };
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
    
    // const dataSchema = {
       
    //     ddoption : selectedField,
    //     label : labelname,
    //     options : inputFields,
    // }
    const saveSection = ()=>{
        dispatch(updateFormField({
       
            ddoption : selectedField,
            label : labelname,
            options : inputFields,
        }));
    }
   
    return (
        <div className='conatiner'>
            <div className="container-box">
                <div className="left">
                <input type="text" placeholder='Field Label' onChange={(e)=>setLabelname(e.target.value)}/>
                    <div className='optioninput'>
                        {inputFields.map((field) => (
                                <div key={field.id} className='optioninbox' >
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                                    placeholder='Option...'
                                />
                                <AiOutlineCloseCircle className='closeicon'size={'1.5rem'} onClick={() => removeInputField(field.id)}/>
                            </div>
                        ))}
                        <button className='btn' onClick={addInputField}>Add Field</button>
                    </div>

                    
                </div>
                <div className="right">

                    <select id="fieldSelector" onChange={handleFieldChange} value={selectedField} className='optionsbox'>
                        <option value="Select option">Select option</option>
                        {fields.map((field, index) => (
                            <option key={index} value={field}>
                                {field}
                            </option>
                        ))}
                    </select>
                    
                    <div className='savesection'>
                        <button onClick={saveSection}>Save Section</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addsection