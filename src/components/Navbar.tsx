import React from 'react'
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className=' w-full h-20 bg-gray-200 text-center flex justify-center items-center'>
      <Link to='/'>
        <div className="  mx-10 lg:max-w-5xl lg:mx-auto flex gap-2 items-center">
          <h1 className='  text-2xl font-bold uppercase'>Cocktail</h1>
          <FaCocktail className=' text-4xl' />
        </div>
      </Link>
    </nav>
  )
}

export default Navbar