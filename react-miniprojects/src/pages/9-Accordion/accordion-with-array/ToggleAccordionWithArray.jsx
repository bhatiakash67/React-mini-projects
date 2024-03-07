import React, { useState } from 'react'
import data from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

function ToggleAccordionWithArray() {
    const [openItems, setOpenItems] = useState([])
    const [toggle, setToggle] = useState(false)

    function toggleAccordion() {
        setToggle((prevToggle) => !prevToggle)
    }

    function singleAccordion(id) {
        setOpenItems((prevOpenItems) => (prevOpenItems === id ? [] : id))
    }

    function multipleAccordion(id) {
        setOpenItems((prevOpenItems) => {
            if (prevOpenItems.includes(id)) {
                return prevOpenItems.filter((itemId) => itemId !== id)
            }
            else {
                return [...prevOpenItems, id]
            }
        })
    }
    const handleAccordionClick = toggle ? multipleAccordion : singleAccordion;

    return (
        <div className="body flex-col justify-center items-center h-screen">
            <div className='flex justify-center mt-52 w-screen text-white'>
                <button
                    onClick={toggleAccordion}
                    className='rounded-2xl p-5 bg-black text-2xl hover:text-yellow-500'>
                    {toggle ? "Click for Single Accordion" : "Click for Multiple Accordion"}
                </button>
            </div>

            <div className='flex justify-center items-center mt-9'>
                <div className="innerbody p-5 border-xl w-1/2 bg-gray-200 rounded-2xl">
                    <h1 className='text-5xl font-bold flex p-5'>Frequently Asked Questions</h1>
                    {data && data.length !== 0 ? (
                        <div>
                            {data.map((item) => (
                                <div className='q-n-a m-3 mt-5 h-1/3 bg-gray-100 rounded-2xl p-5 cursor-pointer hover:scale-[101%]'
                                    key={item.id}
                                    >
                                    <div className='questions flex justify-between items-center text-3xl font-bold'
                                    onClick={() => handleAccordionClick(item.id)}>
                                        {item.question}
                                        <button
                                            className='text-black p-3'>
                                            {openItems.includes(item.id) ?
                                                <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faPlus} />}
                                        </button>
                                    </div>
                                    {openItems.includes(item.id) && (
                                        <div className='answers p-5 text-3xl'>
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='flex justify-center items-center font-bold text-5xl m-5'>No data found.</div>)
                    }
                </div>
            </div>
        </div >
    )
}
export default ToggleAccordionWithArray