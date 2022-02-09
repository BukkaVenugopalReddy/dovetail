import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCount } from './Context';

function SecondForm() {

    let navigate=useNavigate()

    const { state } = useCount()
    const { dispatch } = useCount()

    const [addressOne, setAddressOne] = useState("")
    const [addressTwo, setAddressTwo] = useState("")
    const [addressThree, setAddressThree] = useState("")

    const handleResult = () => {
        if (addressOne !== "" && addressTwo !== "" && addressThree !== "") {
            dispatch({ type: 'addressOne', payload: addressOne })
            dispatch({ type: 'addressTwo', payload: addressTwo })
            dispatch({ type: 'addressThree', payload: addressThree })
        }
        navigate("/result")

    }

    console.log(state)
    return (
        <div className='mainAdress'>
            <div>
                <input type="text" className='input_field' name="addressOne" placeholder='addressOne' value={addressOne} onChange={(e) => setAddressOne(e.target.value)} />
                <input type="text" className='input_field' name="addressTwo" placeholder='addressTwo' value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)} />
                <input type="text" className='input_field' name="addressThree" placeholder='addressThree' value={addressThree} onChange={(e) => setAddressThree(e.target.value)} />

            </div>
            <div className='adressButton'>
                <button onClick={handleResult}>NEXT</button>
            </div>
        </div>
    );
}

export default SecondForm;
