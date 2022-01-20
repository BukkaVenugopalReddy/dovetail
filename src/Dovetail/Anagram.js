import React, { useState } from 'react';
import HeaderTitle from './HeaderTitle';
import Links from './Links';

function Anagram() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [resultButton, setResultButton] = useState("")
    const [result, setResult] = useState(false)
    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)

    var object = {}

    const handleResult = () => {
        if (firstName !== ""||lastName !== "") {
                    if (firstName && lastName) {
                        object.firstName = firstName
                        object.lastName = lastName
                        if (firstName.toLowerCase().split("").sort().join("") === lastName.toLowerCase().split("").sort().join("")) {
                            setResult(true)
                        } else{
                            setResult(false)
                        }
                    }
                    setResultButton(object)
                    setFirstName("")
                    setLastName("")
                 } else {
            setErrorFirstName(true)
            setErrorLastName(true)
        }

    }


    return (
        <>
            <HeaderTitle title={"Anagram"}/>
            <div className='anagram'>
                <div className='fields'>
                    <input className='inputFields' type="text" placeholder='Enter first Word' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errorFirstName && <p className='errorText'>Please Enter the firstword</p>}
                    <input className='inputFields' type="text" placeholder='Enter Second Word' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {errorLastName && <p className='errorText'>Please enter the Second word</p>}
                </div>
                <div>
                    <button className='resultButton' onClick={handleResult}>Result</button>
                </div>
                {resultButton &&
                    <div className='resultStatus'>
                        <h1 className='resultText'>{resultButton.firstName ? resultButton.firstName : ""},{resultButton.lastName ? resultButton.lastName : ""}</h1>
                         <h1> Returns {result === true ? "True" : "False"}</h1>
                    </div>}
            </div>
          <Links/>
        </>
    );
}

export default Anagram;
