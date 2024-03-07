import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className=' bg-blue-100 w-screen h-[100px] flex flex-col justify-center items-center m-2'>
      <p className='p-2 text-3xl font-bold'>Navigation Bar</p>
      <Link to='/'><p className='p-2 text-5xl font-bold'>HomePage</p></Link>
    </div>
  )
}

export default NavBar