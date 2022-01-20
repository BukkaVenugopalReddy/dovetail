import React, { useState } from 'react';
import countryListAllIsoData from './CountryCodes';
import HeaderTitle from './HeaderTitle';
import Links from './Links';
import "./styles.css"

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [countryCode, setCountryCode] = useState("+004")
    const [submitButton, setSubmitButton] = useState(false)

    var object = {}
    const handleSubmit = () => {
            object.firstName = firstName
            object.lastName = lastName
            object.mobileNumber = mobileNumber
            object.countryCode = countryCode
            setSubmitButton(object)
    }
    return (
        <>
          <HeaderTitle title={"Form"}/>
            <div className='formData'>
                <div className='formNames'>
                    <div className='errorFielde'>
                        <input className='inputFields' type="text" placeholder='First Name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        {submitButton?.firstName==="" ||submitButton?.firstName?.length<5? <p className='errorText'> Firstname with min 5 letters</p>:""}
                    </div>
                    <div className='errorFielde'>
                        <input className='inputFields' type="text" placeholder='Last Name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        {submitButton.lastName===""?<p className='errorText'> Lastname min 5 letters</p>:""||submitButton?.lastName?.length<5? <p className='errorText'> Lastname min 5 letters</p>:""}
                    </div>
                </div>
                <div className='formCodes'>
                    <select className='formSelect'
                        onChange={(e) => {
                            const selectedCountry = e.target.value
                            setCountryCode(selectedCountry)
                        }}
                    >
                        {countryListAllIsoData.map((items, i) => {
                            return (
                                <option value={"+"+ items.number} >{items.name + "  " +"(+"+ items.number+")"}</option>
                            )
                        })}
                    </select>
                    {/* {errorCountryCode && <p className='errorText'>please Select the country code </p>} */}
                    <input className='inputFields' type="number" value={mobileNumber} placeholder='Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} />
                    {submitButton.mobileNumber===""?<p className='errorText'> please enter the 10 digit mobile number</p>:""||submitButton?.mobileNumber?.length<10? <p className='errorText'> please enter the 10 digit mobile number</p>:""}

                </div>

                <div>
                    <button className='formButton' onClick={handleSubmit}>SUBMIT</button>
                </div>

                {submitButton?.firstName?.length >=5 &&submitButton?.firstName?.length >=5&&submitButton?.mobileNumber?.length >=10 ? <div className='formResult'>
                    <h3>Name : {submitButton.firstName + " " + submitButton.lastName}</h3>
                    <h3>Mobile Number :{submitButton.countryCode + " " + submitButton.mobileNumber}</h3>
                </div>:""}
            </div>
          <Links/>
        </>
    )
}

export default Form;
