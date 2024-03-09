import React, { useState, useEffect } from 'react'

function QuoteGenerator({ url, limit }) {

    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [loading, setLoading] = useState(true);

    const getNewQuote = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${url}?limit=${limit}`)
            if (!response.ok) {
                throw Error("Failed to fetch quote.")
            }
            const fetchedQuotes = await response.json();
            console.log(fetchedQuotes);
            setQuotes(fetchedQuotes)
            const randomIndex = Math.floor(Math.random() * fetchedQuotes.length)
            const { content, author } = fetchedQuotes[randomIndex]
            setQuote(content)
            setAuthor(author)
        }
        catch (error) {
            console.error("Error fetching quote:", error)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNewQuote()
    }, [url, limit])

    return (
        <div className='quote-body w-screen h-screen flex items-center justify-center'>
            <div className='quote-innerbody flex flex-col justify-between items-center rounded-lg h-[60%] w-[70%] bg-blue-100 shadow-xl'>

                <p className='quote-header mt-5 text-5xl text-black font-bold rounded-lg p-5 uppercase'>Quote for the Day</p>

                {loading ? (
                    <p className='m-10 text-3xl'>Loading quotes. Please wait.</p>

                ) : (

                    <div className='quote-content flex flex-col justify-center items-center text-4xl ml-5 mr-5'>
                        <h3 className='quote mt-10 p-10'>{quote}</h3>
                        <h3 className='quote-writer mt-3 mb-10 font-bold'>- {author}</h3>
                    </div>
                )}

                <button className='bg-blue-500 rounded-2xl p-[50px] h-[15%] w-[25%] mb-9 flex justify-center items-center'
                    onClick={() => {
                        const randomIndex = Math.floor(Math.random() * quotes.length);
                        const { content, author } = quotes[randomIndex];
                        setQuote(content);
                        setAuthor(author);
                    }}
                > <p className='text-4xl font-bold text-white'>Change Quote </p>
                
                </button>
            </div>
        </div>
    )

}

export default QuoteGenerator