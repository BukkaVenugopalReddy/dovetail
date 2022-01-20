import React, { useState } from 'react';

var array = []

function TempTracker() {

    const [temparature, setTemparature] = useState("")
    const [meanData, setMeanData] = useState("")
    const [modeValue, setModeValue] = useState("")


    const handleSubmit = () => {
        if (temparature) {
            array.push(temparature)
        }
        setTemparature("")


        if (array) {
            var sum = 0
            for (var i = 0; i < array.length; i++) {
                sum += parseInt(array[i], 10)
            }
            var average = sum / array.length
            if (sum) {
                setMeanData(average ? average : 0)
            }
        }


        if (array) {
            const mode = {}
            let max = 0
            let count = 0
            for (let i = 0; i < array.length; i++) {
                const item = array[i]
                if (mode[item]) {
                    mode[item]++
                } else {
                    mode[item] = 1
                }
                if (count < mode[item]) {
                    max = item
                    count = mode[item]
                }

            }
            setModeValue(max)
        }
    }



    return (
        <>
        <div className='tempTracker'>
            <div>
                <input className='inputFields' type="number" placeholder='Type Here' value={temparature} onChange={(e) => { setTemparature(e.target.value) }} />
                <button className='resultButton' onClick={handleSubmit}>SUBMIT</button>
            </div>
            {array.length > 0 &&
                <div className='tempResult'>
                    <h3>Max Temparature : {parseInt(Math.max(...array)) ? parseInt(Math.max(...array)) : 0}</h3>
                    <h3>Min Temparature : {parseInt(Math.min(...array)) ? Math.min(...array) : 0}</h3>
                    <h3>Mean of all range Temparatures : {meanData ? meanData : 0}</h3>
                    <h3>Mode of all the temparatures :{modeValue ? modeValue : 0}</h3>
                </div>
            }
        </div>
        <div>
        <button ><a href='/'>Form</a></button>
        <button><a href='/anagram'>Anagram</a></button>
        <button><a href='/temptracker'>Temp Tracker</a></button>
    </div>
    </>
    );
}

export default TempTracker;
