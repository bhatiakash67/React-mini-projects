import Reat, { useState } from "react"
import "./styles.css"
import data from "./data"

function MultipleAccordion() {

const[expandedItems, setExpandedItems] = useState({})

function toggleAccordion(id) {
    setExpandedItems(prevState => ({
        ...prevState,
        [id]: !prevState[id]}))
}

    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    
                    data && data.length > 0 ? 
                    
                    data.map((dataItem) => {
                        return (
                            <div className="item" key = {dataItem.id}>
                                <div onClick = {() => toggleAccordion(dataItem.id)} className="title"><h3>{dataItem.question}</h3></div>

                                {
                                expandedItems[dataItem.id] ? <div className="answer">{dataItem.answer}</div> : null 
                                }
                            </div>

                        )
                    })

                    : <div>No data available.</div>
                }
            </div>
        </div>
    )
}

export default MultipleAccordion