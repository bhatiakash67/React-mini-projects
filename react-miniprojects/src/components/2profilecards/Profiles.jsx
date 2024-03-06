import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Card from './Card.jsx'
import userInfo from './userData.js'

function Profiles() {

  return (
    <div className='m-5'>
      <h1 className="m-5 bg-green-400 text-black text-center p-4 rounded-xl mb-10 flex justify-center items-center h-20 text-3xl md:text-5xl lg:text-6xl">Profile cards</h1>

      {/* This is the parent div for the cards inside */}

      <div className='bg-gray-500 w-screen h-screen m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-x-1 gap-y-1 place-items-center'>

        {/* Cards are replicated here  */}
        {
          userInfo && userInfo.length > 0 ?
            (
              userInfo.map((data) => (
                <Card key={data.id} {...data} />
              ))
            ) : (
              <div className='flex justify-center w-screen h-screen items-center bg-red-100 text-5xl'>No data found.</div>
            )
        }
      </div>
    </div>
  )
}
export default Profiles