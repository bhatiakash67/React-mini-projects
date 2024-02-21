import React from 'react'

function QuoteGenerator() {
    return(
        <div className='quote-body w-screen h-screen bg-red-200 flex items-center justify-center'>
            <div className='quote-innerbody flex flex-col justify-between items-center border-black rounded-lg w-[50%] border-[10px] bg-red-100 shadow-xl'>
                
                <p className='quote-header mt-5 text-5xl'>Quote of the Day</p>
                <div className='quote-content flex flex-col justify-center items-center text-4xl ml-5 mr-5'><h3 className='quote mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, pariatur at eligendi vitae nisi cumque tempora ratione eius recusandae.</h3>
                <h3 className='quote-writer mt-3 mb-10'>- Lorem, ipsum.</h3></div>
                
                <button className='bg-red-500 rounded-2xl p-5 mb-5'>Click for a new Quote</button>
            </div>
        
        </div>
    )

}

export default QuoteGenerator