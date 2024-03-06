import React, { useState, useEffect } from 'react'
import { Like, DisLike } from '../assets/index'

function Card({ username, btntext = "Click here", bio, src = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" }) {

    const [toggleLike, setToggleLike] = useState(false)

    useEffect(() => {
        const storedLike = localStorage.getItem(`like_${username}`)
        if (storedLike !== null) {
            try {
                setToggleLike(JSON.parse(storedLike))
            } catch (error) {
                console.error("Error parsing storedLike: ", storedLike)
            }
        }
    }, [username])

    useEffect(() => {
        localStorage.setItem(`like_${username}`, JSON.stringify(toggleLike))
    }, [toggleLike, username])

    function likeUpdate() {
        setToggleLike((prevToggleLike) => !prevToggleLike)
    }

    return (
        <div className="relative rounded-lg w-[400px] h-[400px] border-8 border-black" >
            <img
                src={src}
                alt="profile pics"
                className="z-0 h-full w-full rounded-md object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                <img
                    onClick={() => { likeUpdate() }}
                    src={toggleLike ? Like : DisLike}
                    alt="like"
                    className='z-1 absolute top-5 right-2 w-[10%] h-[10%] hover:scale-125 transition-transform duration-300' /></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {bio}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black p-2 rounded-xl hover:scale-105">
                    {btntext}
                </button>
            </div>
        </div>
    )
}
export default Card