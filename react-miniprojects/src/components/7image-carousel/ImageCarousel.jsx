import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ImageCarousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)

    async function getImages() {
        try {
            setLoading(true)
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")

            if (!response.ok) {
                throw new Error("Failed to fetch image of a cat")
            }

            const fetchedImages = await response.json()
            setImages(fetchedImages)
        }

        catch (error) {
            console.log("Error fetching image:", error);
        }

        finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        getImages()

    }, [])

    const moveRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const moveLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    return (
        <div className='page flex flex-wrap justify-center items-center p-0 m-0 h-screen bg-blue-300 rounded-xl relative'>

            <div className='element flex flex-col items-center text-white p-1 rounded-xl md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto' style={{ width: '80%', height: '80%' }}>

                <div className='images' style={{ width: '100%', height: '100%' }}>
                    {loading ?
                        (
                            <p className='bg-blue-200 flex justify-center items-center text-black rounded-2xl text-5xl' style={{ width: '100%', height: '100%', margin: '0 auto' }}> Loading Amazing Art Pieces.</p>
                        )
                        : (
                            <img
                                src={images.length > 0 ? images[currentImageIndex].url : ''}
                                alt={`image ${currentImageIndex + 1}`} className=' w-full text-black rounded-xl' style={{ width: '100%', height: '100%', margin: '0 auto' }} />
                        )
                    }

                    <button className='left bg-black rounded-full text-white p-2 absolute transform -translate-y-1/2' style={{ top: '50%', left: '5%' }}
                        onClick={() => moveLeft()}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size='3x' /></button>

                    <button className='right bg-black text-white rounded-full p-2 absolute transform -translate-y-1/2' style={{ top: '50%', right: '5%' }}
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