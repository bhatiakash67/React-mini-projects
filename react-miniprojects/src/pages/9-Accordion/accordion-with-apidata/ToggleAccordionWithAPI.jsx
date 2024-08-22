import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

function ToggleAccordionWithAPI() {

    const [loading, setLoading] = useState(true)
    const [fetchedTrivia, setFetchedTrivia] = useState([])
    const [clickedIndex, setClickedIndex] = useState([])
    const [toggle, setToggle] = useState(false)


    async function QnAfromAPI() {
        const category = 'geography'
        const apiKey = 'GXmFduhHQHUVqFWlfplZcw==qxKXIYJlZo59MjS6'

        try {
            setLoading(true)
            const response = await fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=10`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error("Failed to fetch Q-n-A")
            }
            const result = await response.json()
            setFetchedTrivia(result)
            console.log(result);
        }
        catch (error) {
            alert("Error fetching Q-n-A:", error.message)
        }
        finally {
            setLoading(false)
        }
    }

    function toggleAccordion() {
        setToggle((prevToggle) => !prevToggle)
    }

    const singleAccordion = (id) => {
        setClickedIndex((prevClickedIndex) => (prevClickedIndex.includes(id) ? [] : [id]));
    };

    function multipleAccordion(id) {
        setClickedIndex((prevClickedIndex) => {
            if(prevClickedIndex.includes(id)) {
                return prevClickedIndex.filter((itemId) => itemId !== id)
            }else {
                return [...prevClickedIndex, id]
            }
        })
    }
    const handleAccordionClick = toggle ? multipleAccordion : singleAccordion;

    useEffect(() => {
        QnAfromAPI()
    }, [])

    return (
        <div className="body flex-col justify-center items-center h-screen">
            <div className='flex justify-center mt-10 w-screen text-white'>
                <button
                onClick={toggleAccordion}
                    className='rounded-2xl p-5 bg-black text-2xl hover:text-yellow-500'>
                    {toggle ? "Click for Single Accordion" : "Click for Multiple Accordion"}
                </button>
            </div>

            <div className='flex justify-center items-center m-9'>
                <div className="innerbody p-5 border-xl w-1/2 bg-gray-200 rounded-2xl">
                    <h1 className='text-5xl font-bold flex p-5'>Frequently Asked Questions</h1>
                    <div>
                        {loading ? (
                            <p className='m-10 text-3xl'>Loading Questions and Answers. Please wait.</p>
                        ) : (
                            
                            <div>
                                {fetchedTrivia.map((qa, index) => (
                                    <div
                                        key={index}
                                        className='q-n-a m-3 mt-5 h-1/3 bg-gray-100 rounded-2xl p-5 cursor-pointer hover:scale-[101%]'
                                        >
                                        <div className='questions flex justify-between items-center text-3xl font-bold'
                                        onClick={() => handleAccordionClick(index)}>
                                            {qa.question}
                                            <button
                                                className='text-black p-3'>
                                                {clickedIndex.includes(index) ?
                                                <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faPlus} />}
                                            </button>
                                        </div>
                                        {clickedIndex.includes(index) && (
                                        <div className='answers p-5 text-3xl'>
                                        
                                            {qa.answer}
                                        </div>
                                        )}
                                    </div>
                                ))
                                }
                            </div>
                        )
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}
export default ToggleAccordionWithAPI