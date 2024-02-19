import React, { useState } from 'react'
import './ColourChanger.css'

function ColourChanger() {

    const [backgroundColour, setBackgroundColour] = useState("#808080")
    const [backgroundColourText, setBackgroundColourText] = useState("GREY")

    const rgb = ["RGB(7, 15, 43)", "RGB(27, 26, 85)", "RGB(83, 92, 145)", "RGB(146, 144, 195)", "RGB(9, 38, 53)", "RGB(27, 66, 66)", "RGB(92, 131, 116)", "RGB(158, 200, 185)"]

    const hexColoursarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    // Random RGB Colour Selector from rgb array
    function randomRGBColourGenerator() {
        const randomRGBColour = Math.floor(Math.random() * rgb.length)
        return rgb[randomRGBColour]
    }

    // Random Hex Colour Maker
    function randomHexColourGenerator() {
        let randomHexColour = "#"

        for (let i = 0; i <= 5; i++) {
            const randomHexDigit = Math.floor(Math.random() * hexColoursarray.length)
            randomHexColour += hexColoursarray[randomHexDigit]
        }
        return randomHexColour

    }

    // RGB button handle 
    const handleRandomRGBColourGenerator = () => {
        const randomRGBColour = randomRGBColourGenerator()
        setBackgroundColour(randomRGBColour)
        setBackgroundColourText(randomRGBColour)
    }

    // Hex button handle
    const handleRandomHexColourGenerator = () => {
        const randomHexColour = randomHexColourGenerator()
        setBackgroundColour(randomHexColour)
        setBackgroundColourText(randomHexColour)
    }

    // // Random button handle for RGB or Hex
    const handleRandomColourGenerator = () => {

        const isRGB = Math.random() < 0.5
        if(isRGB) {
            handleRandomRGBColourGenerator()
        }
        else{
            handleRandomHexColourGenerator()
        }
    }

    return (
        <div className="parent-flipper" style={{ backgroundColor: backgroundColour }}>

            <div className="colour-box">
                <p id='text-for-display' >BACKGROUND COLOUR: <span id='colour-info'> {backgroundColourText} </span></p>
            </div>

            <div className="colour-buttons">

                {/* RGB Button */}
                <button className='colour-changing-buttons' id='random-rgb-colour'
                    onClick={() => handleRandomRGBColourGenerator()}
                >RGB Colour</button>

                {/* HEX Button */}
                <button className='colour-changing-buttons' id='random-hex-colour'
                    onClick={() => handleRandomHexColourGenerator()}
                >Hex Colour</button>

                {/* Random Colour Button */}
                <button className='colour-changing-buttons' id='random-colour'
                onClick={() => handleRandomColourGenerator()}
                >Random Colour</button>
            </div>

        </div>
    )
}

export default ColourChanger