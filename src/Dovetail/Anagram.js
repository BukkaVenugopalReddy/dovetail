import React, { useState } from 'react';
import { useLocation } from 'react-router';

function Anagram() {
let history=useLocation()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [resultButton, setResultButton] = useState("")
    const [result, setResult] = useState(false)

    var object = {}

    const handleResult = () => {
        if (firstName && lastName) {
            object.firstName = firstName
            object.lastName = lastName
            if (firstName.toLowerCase().split("").sort().join("") === lastName.toLowerCase().split("").sort().join("")) {
                setResult(true)
            }
        }
        setResultButton(object)
        setFirstName("")
        setLastName("")
    
    }
    const handleForm=()=>{
        history.pushState("/")
    }
    const handleAnangram=()=>{
        history.push("/anagram")
    }
    const handleTempTracker=()=>{
        history.push("/temptracker")
    }


    return (
        <div>
        <div className='anagram'>
            <div className='fields'>
                <input className='inputFields' type="text" placeholder='Enter first Word' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className='inputFields' type="text" placeholder='Enter Second Word' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <button className='resultButton' onClick={handleResult}>Result</button>
            </div>
            {resultButton &&
                <div className='resultStatus'>
                    <h1 className='resultText'>{resultButton.firstName?resultButton.firstName:"" },{resultButton.lastName?resultButton.lastName:""}</h1>
                  { resultButton.firstName&&resultButton.lastName&& <h1> {" "+"Returns"} {result === true ? "True" : "Fasle"}</h1>}
                </div>}
        </div>
        <div>
            <button ><a href='/'>Form</a></button>
            <button><a href='/anagram'>Anagram</a></button>
            <button><a href='/temptracker'>Temp Tracker</a></button>
        </div>
        </div>
    );
}

export default Anagram;
