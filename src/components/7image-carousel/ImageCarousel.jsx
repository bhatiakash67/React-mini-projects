import React, { useState } from 'react'
import { Image1, Image2, Image3, Image4, Image5, Image6, Image7 } from './images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ImageCarousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]

    const moveRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const moveLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    return (
        <div className='page flex flex-wrap justify-center items-center p-0 m-0 h-screen bg-blue-400 rounded-xl'>
            <div className='element flex flex-col items-center text-white p-1 rounded-xl md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto' style={{ width: '80%', height: '80%' }}>

                <div className='images relavite' style={{ width: '100%', height: '100%' }}>
                    <img src={images[currentImageIndex]}
                        alt={`image ${currentImageIndex + 1}`} className='object-cover w-full text-black rounded-xl' style={{ width: '95%', height: '100%', objectFit: 'cover', margin: '0 auto' }} />

                    <button className='left bg-black rounded-full text-white p-2 absolute transform -translate-y-1/2' style={{ top: '60%', left: '20%' }}
                        onClick={() => moveLeft()}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size='3x' /></button>

                    <button className='right bg-black text-white rounded-full p-2 absolute transform -translate-y-1/2' style={{ top: '60%', right: '20%' }}
                        onClick={() => moveRight()}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size='3x' /></button>
                    <div className='flex justify-center mt-4'>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator mt-5 rounded-full ${index === currentImageIndex ? 'active bg-gray-500' : 'bg-gray-300'}`}
                                style={{ width: '10px', height: '10px', marginRight: '5px' }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImageCarousel