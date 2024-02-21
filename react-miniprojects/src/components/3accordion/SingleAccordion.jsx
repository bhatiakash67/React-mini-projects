import React, { useState } from 'react'
import './styles.css'
import data from './data'

function SingleAccordion() {

const[selected, setSelected] = useState(null)

function toggleAccordion(value) {
    setSelected((prevSelected) => 
        prevSelected !== value ? value : null
    )
}

    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0 ?  
                    data.map((item) => (
                        <div className="item" key = {item.id}>
                            <div className="title" onClick={() => {toggleAccordion(item.id)}}>
                                <h3>{item.question}</h3>
                            </div>
                            {
                                selected === item.id ? <div className="answer">
                                    {item.answer}</div> :
                                null
                            }
                        </div>
                    ))
                    :
                    <div>No data available</div> 
                }
            </div>
        </div>
    )

}

export default SingleAccordion