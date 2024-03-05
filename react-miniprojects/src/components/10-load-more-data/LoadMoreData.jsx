import React, { useState, useEffect } from 'react'

function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchingData() {
        try {
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            if (!response.ok) {
                throw new Error("Failed to fetch data")
            }

            const cards = await response.json();
            setFetchedData((prevData) => [...prevData, ...cards.products])
            console.log(cards);

        } catch (e) {
            console.error(e.message)
        } finally {
            setLoading(false)
        }
    }

    function loadMore() {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        fetchingData()
    }, [count])

    useEffect(() => {
        if (fetchedData && fetchedData.length === 100)
            setDisableButton(true)
    }, [fetchedData])

    return (
        <div>
            <h1 className='m-5 bg-red-100 p-5 text-center font-bold text-5xl'>Item Cards</h1>
            <div className='grid bg-gray-200'>
                {
                    loading ? (
                        <div className='flex justify-center items-center font-bold text-6xl h-screen w-screen bg-gray-100'>Getting the info for you. Please wait</div>
                    ) : (
                        <div className="cards place-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100%] h-[100%] gap-1">
                            {fetchedData && fetchedData.length ? (
                                fetchedData.map((data) => (
                                    <div
                                        key={data.id}
                                        className='bg-gray-100 rounded-lg m-1 flex flex-col items-center justify-center'>
                                        <h1>ID: {data.id}</h1>
                                        <h3>{data.title}</h3>
                                        <img src={data.thumbnail} alt={data.title}
                                            className='w-[300px] h-[200px] rounded-2xl' />
                                        <p>RATE: {data.price}</p>
                                    </div>
                                ))
                            ) : null}
                        </div>
                    )
                }
            </div>
            <div className='flex flex-col justify-center items-center m-1'>
                <button className='bg-black text-white m-2 p-5 rounded-lg'
                    disabled={disableButton}
                    onClick={() => loadMore()}>Click to load more items
                </button>
                {
                    disableButton ? <p>You have reached the end of the list.</p> : null
                }
            </div>
        </div>
    )
}
export default LoadMoreData