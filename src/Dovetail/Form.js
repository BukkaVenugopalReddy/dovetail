import React, { useState } from 'react';
import "./styles.css"

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [countryCode, setCountryCode] = useState("+91")
    const [submitButton, setSubmitButton] = useState(false)
    const [errorCountryCode, setErrorCountrycode] = useState(false)
    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorMobileNumber, setErrorMobileNumber] = useState(false)


    const handleSubmit = () => {
        var object = {}
        if (firstName !== "" && lastName !== "" && countryCode !== "" && mobileNumber !== "") {
            if (firstName !== "" && firstName.length >= 5) {
                if (lastName !== "" && lastName.length >= 5) {
                    if (mobileNumber !== "" && mobileNumber.length > 9) {
                        if (countryCode) {
                            object.firstName = firstName
                            object.lastName = lastName
                            object.mobileNumber = mobileNumber
                            object.countryCode = countryCode
                            setSubmitButton(object)
                        } else {
                            setErrorCountrycode(true)
                        }
                       
                    } else {
                        setErrorMobileNumber(true)
                    }
                } else {
                    setErrorLastName(true)
                }
            } else {
                setErrorFirstName(true)
            }
        }else{
            setErrorCountrycode(true)
            setErrorMobileNumber(true)
            setErrorLastName(true)
            setErrorFirstName(true)
        }
    }
    return (
        <>
        <div className='formData'>
            <div className='formNames'>
                <div className='errorFielde'>
                <input className='inputFields' type="text" placeholder='First Name' value={firstName} onChange={(e) => { setFirstName( e.target.value ) }} />
                {errorFirstName && <p className='errorText'>Please Enter the FirstName</p>}
                </div>
                <div className='errorFielde'>
                <input className='inputFields'  type="text" placeholder='Last Name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                {errorLastName && <p className='errorText'>Please enter the Last Name</p>}
            </div>
            </div>
            <div className='formCodes'>
                <select className='formSelect' value={countryCode} onChange={(e) => {
                    const selectedCountry = e.target.value
                    setCountryCode(selectedCountry)
                }}>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+27">+27</option>
                    <option value="+971">+971</option>
                </select>
                {errorCountryCode && <p className='errorText'>please Select the country code </p>}
                <input className='inputFields'  type="number" value={mobileNumber} placeholder='Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} />
                {errorMobileNumber && <p className='errorText'>please enter the Mobile Number</p>}

            </div>

            <div>
                <button className='formButton' onClick={handleSubmit}>SUBMIT</button>
            </div>

            {submitButton && <div className='formResult'>
                <h3>Name : {submitButton.firstName + " " + submitButton.lastName}</h3>
                <h3>Mobile Number :{submitButton.countryCode+" "+ submitButton.mobileNumber}</h3>
            </div>}
        </div>
          <div>
          <button ><a href='/'>Form</a></button>
          <button><a href='/anagram'>Anagram</a></button>
          <button><a href='/temptracker'>Temp Tracker</a></button>
      </div>
      </>
    )
}

export default Form;
