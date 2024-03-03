import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Card from './Card.jsx'
import userInfo from './userData.js'

function Profiles() {

  return (
    <div className='m-5'>
      <h1 className="m-5 bg-green-400 text-black text-center p-4 rounded-xl mb-10 align-middle h-20 text-5xl lg:text-6xl">Profile cards</h1>

      {/* This is the parent div for the cards inside */}

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-5 p-1'>

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