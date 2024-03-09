import React from 'react'
import Layout from '../../Layout'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar'
import { Link } from 'react-router-dom'

function HomePage() {
    return (

        // Grid Layout for the cards 
        <div className='grid w-screen bg-red-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 place-items-center border p-5'>

            {/* Counter project */}
            <Link to='counter'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Counter Project
                </div>
            </Link>
            {/* Profile Cards project */}
            <Link to='profiles'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Profile Cards Project
                </div>
            </Link>
            {/* Multiple Accordion project */}
            <Link to='multiple-accordion'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Multiple Accordion Project
                </div>
            </Link>
            {/* Single Accordion Project */}
            <Link to='single-accordion'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Single Accordion Project
                </div>
            </Link>
            {/* Temperature Control UI project */}
            <Link to='tempcontrol-app'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Temperature Control Project
                </div>
            </Link>
            {/* Star Rating project */}
            <Link to='star-rating'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Star Rating Project
                </div>
            </Link>
            {/* Colour Changer project */}
            <Link to='colour-changer'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Colour Changer Project
                </div>
            </Link>
            {/* Image Carousel project */}
            <Link to='image-carousel'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Image Carousel Project
                </div>
            </Link>
            {/* Quote Generator project */}
            <Link to='quote-generator'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Random Quote Generator Project
                </div>
            </Link>
            {/* Toggle between single/multiple Accordion with data from array project project */}
            <Link to='accordion-with-array'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Toggle Accordion with Array Project
                </div>
            </Link>
            {/* Toggle between single/multiple Accordion with data from API project */}
            <Link to='accordion-with-api'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Toggle Accordion with API Data Project
                </div>
            </Link>
            {/* Multiple Accordion with use of components for repeating cards project */}
            <Link to='multiple-accordion-with-components'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Multiple Accordion with Components Project
                </div>
            </Link>
            {/* Load more data cards project */}
            <Link to='load-more-data'>
                <div className='bg-green-100 w-[300px] h-[300px] border-solid border-2 border-black text-5xl p-5 font-bold flex justify-center items-center'>
                    Load More Data Cards Project
                </div>
            </Link>
        </div>
    )
}

export default HomePage