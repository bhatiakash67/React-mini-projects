import React, { useState, useEffect } from 'react'

function QuoteGenerator() {

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [loading, setLoading] = useState(true);

    const getNewQuote = async () => {
        
        try {
            setLoading(true)
            const response = await fetch("https://api.quotable.io/quotes/random?limit=25")

            if (!response.ok) {
                throw new Error("Failed to fetch quote.")
            }

            const quotes = await response.json();
            const { content, author } = quotes[0]
            setQuote(content)
            setAuthor(author)
        }

        catch (error) {
            console.error("Error fetching quote:", error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNewQuote()
    }, [])

    return (
        <div className='quote-body w-screen h-screen bg-red-200 flex items-center justify-center'>
            <div className='quote-innerbody flex flex-col justify-between items-center border-black rounded-lg w-[50%] border-[10px] bg-red-100 shadow-xl'>

                <p className='quote-header mt-5 text-5xl bg-black rounded-lg text-white p-5'>Quote of the Day</p>

                {loading ? (
                    <p className='m-10 text-3xl'>Loading quotes. Please wait.</p> 
                    
                    ) : (

                    <div className='quote-content flex flex-col justify-center items-center text-4xl ml-5 mr-5'>
                        <h3 className='quote mt-10'>{quote}</h3>
                        <h3 className='quote-writer mt-3 mb-10 font-bold '>- {author}</h3>
                    </div>
                )}

                <button className='bg-red-500 rounded-2xl p-5 mb-5'
                    onClick={() => getNewQuote()}
                >Click for a new Quote</button>
            </div>
        </div>
    )

}

export default QuoteGenerator