import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function QnAComponent({ question, answer }) {

    // const [showAnswer, setShowAnswer] = useState(null)
    const [selectedId, setSelectedId] = useState(null)

    const multipleAccordion = () => {
        setSelectedId(!selectedId)
    }

    return (
        <div className="q-n-a m-2 h-1/3 bg-green-100 flex-col justify-center items-center rounded-2xl">
            {/* Question */}
            <div className="questions justify-center flex p-5"> <span className='font-bold text-2xl'>      {question}</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aut culpa ipsa assumenda, modi
                similique nostrum sequi praesentium nemo nisi?
                <button
                    onClick={() => multipleAccordion()}

                    className='bg-black text-white w-1/12 h-1/12 rounded-full'>
                    {
                        selectedId ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                </button>
            </div>

            {/* Answer */}

            {
                selectedId && (
                    <div className="answers p-5"> <span className='font-bold text-2xl'>  {answer}</span> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Amet magnam magni assumenda. Asperiores, officiis obcaecati!
                    </div>
                )}

        </div>
    )
}

export default QnAComponent