import React,{useEffect, useState} from 'react'
import './Titlesection.scss'
import { useDispatch,useSelector } from 'react-redux'
import {updateFormTitle} from './../../Context/Slice/Reducer'
import Multisection from '../Section2/Multisection/Multisection'
import { useNavigate } from 'react-router-dom'


const Titlesection = () => {
    
    useEffect(()=>{
        setCreateForm(true);
    },[]);
    const data = useSelector((state)=>state.formSchema);
    const navigate = useNavigate();
    const [createForm, setCreateForm] = useState(null)
    const [formname,setFormname] = useState('')
    const dispatch = useDispatch();
    
   
    const handlecreateform=()=>{
        setCreateForm(!createForm);
    }
   
    const handleSave =(e)=>{
        console.log("Data : ",data);
        localStorage.setItem('addSection',JSON.stringify(data));
        navigate('/form')
    }
    return (
        <>
            <div className="formcreatebtn">
                {createForm ? <button className='openform' onClick={handlecreateform}>Create Form</button> : <button className='openform' onClick={handlecreateform}>Back</button>}
            </div>
           {(createForm===false) && 
                <div className='form'>     
                    <div className='formtitle'>
                        <input type="text" name="formTitle"  placeholder='Form Title' onChange={(e)=>dispatch(updateFormTitle(e.target.value))}/>
                    </div>  
                    <Multisection/> 
                </div>
            }
            <div className='savebtn'>
                {!createForm && <button className='sbtn' onClick={handleSave}>Save & Generate form</button>}
            </div>
        </>
    )
}

export default Titlesection