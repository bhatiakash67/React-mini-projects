import React, { useState, useEffect } from 'react'
import { Like, DisLike } from '../assets/index'

function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)
    const [likedPost, setLikedPost] = useState({})

    async function fetchingData() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            if (!response.ok) {
                throw new Error("Failed to fetch data")
            }

            const cards = await response.json();
            setFetchedData((prevCards) => [...prevCards, ...cards.products])
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

    useEffect(() => {
        const storedLike = localStorage.getItem(`like`)
        if (storedLike !== null) {
            try {
                setLikedPost(JSON.parse(storedLike))
            } catch (e) {
                console.error("Error parsing storedLike: ", storedLike)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`card_like`, JSON.stringify(likedPost))
    }, [likedPost])

    const toggleLike = (id) => {
        setLikedPost((prevLikedPosts) => {
            const updatedLikes = { ...prevLikedPosts, [id]: !prevLikedPosts[id] }
            console.log(`toggling like for card${id}:`, updatedLikes);
            return updatedLikes
        })
    }

    return (
        <div>
            <h1 className='m-5 bg-red-100 p-5 text-center font-bold text-5xl'>Item Cards</h1>
            <div className='grid bg-gray-200'>
                {
                    loading ? (
                        <div className='flex justify-center items-center font-bold text-6xl h-screen w-screen bg-gray-100'>Getting the info for you. Please wait</div>
                    ) : (
                        <div className="cards place-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100%] h-[100%] gap-5">
                            {fetchedData && fetchedData.length ? (
                                fetchedData.map((data) => (
                                    <div
                                        key={data.id}
                                        className='bg-white relative rounded-lg m-1 flex flex-col items-center justify-center'>
                                        <div className='flex-col justify-center items-center flex-wrap'>
                                            <p className='text-gray-500 text-2xl font-bolder'>ID: {data.id}</p>
                                            <p className='text-2xl font-bold'>{data.title}</p>
                                        </div>
                                        <div className='absolute -top-[-5%] left-[85%] w-[40px] h-[40px] hover:scale-105'>
                                            <img src={likedPost[data.id] ? Like : DisLike}
                                                onClick={() => (toggleLike(data.id))}
                                                alt="" />
                                        </div>
                                        <img src={data.thumbnail} alt={data.title}
                                            className='w-[400px] h-[400px] object-contain rounded-2xl' />
                                        <p className='text-2xl font-bold font-serif'>RATE: Rs.{data.price}</p>
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