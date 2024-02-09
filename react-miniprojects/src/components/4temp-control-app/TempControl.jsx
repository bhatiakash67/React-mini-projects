import React, { useState } from 'react'
import './styles.css'

function TempControlApp() {

    const [temp, setTemp] = useState(20)

    function tempColourChange(){
        if(temp > 30){
            return 'hot'
        }
        else if(temp < 20){
return 'cold'
        }
        else {
            return 'neutral'
        }
    }

    function incTemp() {
        setTemp((prevTemp) => ++prevTemp)
    }

    function decTemp() {
        setTemp((prevTemp) => --prevTemp)
    }

    return (
        <div className="tempcard">
            <div className= "tempcontrolcard">
                <div className= {`tempdisplay ${tempColourChange()}`}>
                {temp}&deg;C
                </div>

                <div className="tempbuttons">
                    <button className='decrease-button' onClick={decTemp}> - </button>
                    <button className='increase-button' onClick={incTemp}> + </button>
                </div>

            </div>
        </div>
    )
}

export default TempControlApp