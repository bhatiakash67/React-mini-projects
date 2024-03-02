import React from 'react'
import './App.css'
import './index.css'
import Card from './Card.jsx'

function Profiles() {

  return (
    <div className='m-5'>
      <h1 className="text-5xl m-5 bg-green-400 text-black text-center p-4 rounded-xl mb-10 align-middle h-20">Profile cards</h1>

      {/* This is the parent div for the cards inside */}

      <div className='grid lg:grid-cols-4 md:grid-cols-3 md:row-gap-4 sm:grid-cols-2 lg:gap-5'>

        {/* Cards are replicated here  */}

        <Card username="Ramya" content="my text evh the release of Letraset sheets containing Lorem Ipsum passages," src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300" />

        <Card username="Sunita" btntext="Click to go ahead" content="ble content of a page Ipsum ito using 'Content here, content here', making it look li" src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=300" />

        <Card username="Radha" btntext="Click here" content="jority have suffered alteration in some form, by injected humoue sure there isn" src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=300" />

        <Card className='md:col-span-2' username="Priya" btntext="Click to know more" content="en-Sydney College in Virginia, looked up one of the ci" src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=300" />

      </div>
    </div>
  )
}
export default Profiles
