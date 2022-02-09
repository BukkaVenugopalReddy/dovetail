import React, { useState } from 'react';

function Data() {

    const handleSubmit=()=>{
        let obj={}
        if(firstName!==""){
            
        }
    }

    

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    return (
        <>
        <div>
            <input type="text" className='input_field' name="firstName" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" className='input_field' name="lastName" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    );
}

export default Data;
