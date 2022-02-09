import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCount } from './Context';

function FirstForm(props) {


    let navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const { dispatch } = useCount()
    const { state } = useCount()

    const handleNext = (props) => {
        if (firstName !== "" && lastName !== "") {
            dispatch({ type: 'firstName', payload: firstName })
            dispatch({ type: 'lastName', payload: lastName })
        }

        navigate("/second")
    }

    return (
        <div>
            <div>
                <input type="text" className='input_field' name="firstName" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" className='input_field' name="lastName" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <button onClick={handleNext}>NEXT</button>
            </div>

        </div>
    );
}

export default FirstForm;
