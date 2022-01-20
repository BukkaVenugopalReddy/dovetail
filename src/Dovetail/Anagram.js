import React, { useState } from 'react';

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
            if (firstName !== "") {
                if (lastName !== "") {
                    if (firstName && lastName) {
                        object.firstName = firstName
                        object.lastName = lastName
                        if (firstName.toLowerCase().split("").sort().join("") === lastName.toLowerCase().split("").sort().join("")) {
                            setResult(true)
                            setTimeout(()=>{
                                setResult("")
                            },2000)

                        }
                    }
                    setResultButton(object)
                    setTimeout(()=>{
                        setResultButton("")
                    },2000)
                    setFirstName("")
                    setLastName("")
                } else {
                    setErrorLastName(true)
                    setTimeout(()=>{
                        setErrorLastName(false)
                    },2000)
                }
            } else {
                setErrorFirstName(true)
                setTimeout(()=>{
                    setErrorFirstName(false)
                },2000)
            }
        } else {
            setErrorFirstName(true)
            setErrorLastName(true)
            setTimeout(()=>{
                setErrorFirstName(false)
                setErrorLastName(false)
            },2000)
        }

    }


    return (
        <>
            <h3 className='title'>Anagram</h3>
            <div className='anagram'>
                <div className='fields'>
                    <input className='inputFields' type="text" placeholder='Enter first Word' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errorFirstName && <p className='errorText'>Please Enter the FirstName</p>}
                    <input className='inputFields' type="text" placeholder='Enter Second Word' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {errorLastName && <p className='errorText'>Please enter the Last Name</p>}
                </div>
                <div>
                    <button className='resultButton' onClick={handleResult}>Result</button>
                </div>
                {resultButton &&
                    <div className='resultStatus'>
                        <h1 className='resultText'>{resultButton.firstName ? resultButton.firstName : ""},{resultButton.lastName ? resultButton.lastName : ""}</h1>
                         <h1> Returns {result === true ? "True" : "Fasle"}</h1>
                    </div>}
            </div>
            <div>
                <button ><a href='/'>Form</a></button>
                <button><a href='/anagram'>Anagram</a></button>
                <button><a href='/temptracker'>Temp Tracker</a></button>
            </div>
        </>
    );
}

export default Anagram;
