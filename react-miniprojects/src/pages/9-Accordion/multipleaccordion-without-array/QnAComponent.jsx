import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function QnAComponent({ question, answer }) {

    const [selectedId, setSelectedId] = useState(null)

    const multipleAccordion = () => {
        console.log(selectedId);
        setSelectedId(!selectedId)
    }

    return (
        <div className="q-n-a m-2 h-1/3 bg-gray-100 flex-col justify-center items-center rounded-2xl">
            {/* Question */}
            <div className="questions justify-center flex p-5 cursor-pointer font-bold"
                onClick={() => multipleAccordion()}>
                <span className='font-bold text-2xl mr-2'>{question}</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aut culpa ipsa assumenda, modi
                similique nostrum sequi praesentium nemo nisi?
                <button
                    className='w-1/12 h-2/12 rounded-full'>
                    {selectedId ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                </button>
            </div>
            {/* Answer */}
            {
                selectedId && (
                    <div className="answers p-5"> <span className='font-bold text-2xl mr-2'>  {answer}</span> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Amet magnam magni assumenda. Asperiores, officiis obcaecati!
                    </div>
                )}
        </div>
    )
}

export default QnAComponent