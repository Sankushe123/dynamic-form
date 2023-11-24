import React, { useEffect, useState } from 'react'
import './Form.scss'
import { useSelector } from 'react-redux'
import Dropdown from '../Formcomponents/Dropdown/Dropdown'
import Radiobutton from '../Formcomponents/Radiobutton/Radiobutton'
import Checkbox from '../Formcomponents/Checkbox/Checkbox'
import Textarea from '../Formcomponents/Textarea/Textarea'
import Textinput from '../Formcomponents/Textinput/Textinput'
import emptybox from './../../../assets/emptybox.png'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const [jsonData, setJsonData] = useState([])
    const [emptyfield, setEmptyfield] = useState(true)
    const [dOption, setDOption] = useState('');
    const [input, setInput] = useState('')
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [message, setMessage] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        const updatedJsonString = localStorage.getItem('addSection');
        const updatedJsonData = JSON.parse(updatedJsonString);
        setJsonData(updatedJsonData); // Update the state variable holding the JSON data

    }, []);
    console.log("jsondata : ", jsonData);
    const heading = jsonData.formTitle;
    const fields = jsonData.formField
    console.log(heading);
    console.log(fields);
    // const x = jsonData.Object.keys.length()
    // // if(Object.keys(jsonData).length === 0 ){
    // //     setEmptyfield(true)   
    // // }
    // // else{
    // //     setEmptyfield(false)
    // // }
    return (
        <div>

            <div className="formcontaier">
                {
                     emptyfield === false ?
                        <div className='emptysection'>
                            <div className='emptybox'>
                                <h1>Empty form field <span>Can't create form</span></h1>
                                <div className='emptyimg'>
                                    <img src={emptybox} alt="emptybox" />
                                </div>
                            </div>

                            <div className='createbtn'>
                                <span onClick={() => navigate('/')}>Create form</span>
                            </div>

                        </div>
                        :
                        <div>

                            <div className="formname">
                                <h1>{heading}</h1>
                            </div>
                            <div className="formfilds" >
                                {fields?.map((user, index) => {
                                    switch (user.ddoption) {
                                        case 'Dropdown':
                                            console.log('Dropdown here');
                                            return (
                                                <Dropdown
                                                    key={index}
                                                    user={user}
                                                    dOption={dOption}
                                                    setDOption={setDOption}
                                                />
                                            );
                                            break;
                                        case 'RadioButton':
                                            return (
                                                <Radiobutton
                                                    key={index}
                                                    user={user}
                                                    selectedOption={selectedOption}
                                                    setSelectedOption={setSelectedOption}
                                                />
                                            );
                                            break;
                                        case 'CheckBox':
                                            console.log('CheckBox here');
                                            return (
                                                <Checkbox
                                                    key={index}
                                                    user={user}
                                                    selectedCheckboxes={selectedCheckboxes}
                                                    setSelectedCheckboxes={setSelectedCheckboxes}
                                                />
                                            );
                                            break;
                                        case 'TextArea':
                                            console.log('TextArea here');
                                            return (
                                                <Textarea
                                                    key={index}
                                                    user={user}
                                                    message={message}
                                                    setMessage={setMessage}
                                                />
                                            );
                                            break;
                                        case 'TextInput':
                                            console.log('TextInput here');
                                            return (
                                                <Textinput
                                                    key={index}
                                                    user={user}
                                                    input={input}
                                                    setInput={setInput}
                                                />
                                            );

                                        default:
                                            console.log('Default here');
                                            break;
                                    }
                                })
                                }
                                <div className='submitbtn'>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                }




            </div>



        </div>
    )
}

export default Form