import React, { useState } from 'react'
import data from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ToggleAccordionWithArray() {

    const [selectedId, setSelectedId] = useState(null)

    function multipleAccordion(id) {
        setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id))
    }

    return (
        <div className="body flex-col justify-center items-center h-screen">

            <div className='flex justify-center mt-52 w-screen text-white' ><button
                className='rounded-2xl p-5 bg-black'>Click to toggle Accordion</button>
            </div>
            <div className='flex justify-center items-center mt-9'>
                <div className="innerbody p-5 border-xl w-1/2 bg-red-200 rounded-2xl">
                    <h1 className='text-3xl font-bold flex justify-center'>FAQ</h1>
                    {data && data.length !== 0 ? (
                        <div>
                            {data.map((item) => (
                                <div className='q-n-a m-2 h-1/3 bg-green-100 rounded-2xl p-5 cursor-pointer'
                                    key={item.id}
                                    onClick={() => multipleAccordion(item.id)}>
                                    <div className='questions flex justify-between items-center text-3xl font-bold'>
                                        {item.question}
                                        <button
                                            className='bg-black text-white rounded-full p-3'>
                                            {selectedId === item.id ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                                        </button>
                                    </div>
                                    {selectedId === item.id && (
                                        <div className="answers p-5 text-3xl ">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    ) : (

                        <div>No data found.</div>)
                    }
                </div>
            </div>
        </div >

    )
}

export default ToggleAccordionWithArray