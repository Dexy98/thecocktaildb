import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
//lottie
import error from '../assets/404.json'
import { Player } from '@lottiefiles/react-lottie-player'
const ErrorPage = () => {
    return (
        <div className=' w-full h-screen flex flex-col justify-center items-center'>
            <div className=''>
                <Player
                    autoplay
                    loop
                    src={error}
                    style={{ height: '60vh', width: '100%' }}
                >
                </Player>
            </div>
            <Link to="/">
                <button className="bg-[#FBD948] text-black px-6 py-4 rounded-full font-bold transition duration-300 hover:bg-yellow-500 hover:text-white flex gap-2 items-center">
                    Torna in Home e cerca il tuo drink <BsArrowLeft className='animate-bounce text-xl' />
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage
