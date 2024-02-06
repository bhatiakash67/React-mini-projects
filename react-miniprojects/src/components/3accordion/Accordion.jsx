import React, { useState } from 'react'
import './styles.css'
import data from './data'

function Accordion() {

    let [selected, setSelected] = useState(null)

    function toggleAccordion(currentValue) {
        setSelected((prevSelected) => prevSelected !== currentValue ? currentValue : null)
    }
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {
                    data && data.length > 0 ?
                        data.map((itemData) => {
                            return (
                                <div className="item" key={itemData.id}>
                                    <div className="title" onClick={() => toggleAccordion(itemData.id)}>
                                        <h3>{itemData.question}</h3>
                                    </div>
                                    {
                                        selected === itemData.id ?
                                            <div className="answer">{itemData.answer}</div>
                                            : null
                                    }
                                </div>
                            );
                        })
                        : <div>No data available</div>
                }
            </div>
        </div>
    )

}

export default Accordion