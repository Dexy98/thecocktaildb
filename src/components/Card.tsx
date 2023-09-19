import React from 'react'
import { drink } from '../react-app-env';
import { Link } from "react-router-dom";


const Card: React.FC<drink> = ({ idDrink, strDrink, strAlcoholic, strDrinkThumb }) => {

  return (
    <Link to={`./detail/${idDrink}`}>
      <div
        key={idDrink}
        className=' bg-gray-200 rounded-lg p-4 flex flex-col justify-between shadow-md shadow-black hover:-translate-y-2 transition-all'
      >
        <h1 className=' font-bold'>{strDrink}</h1>
        <p> {strAlcoholic}</p>
        <img className=' w-full cover rounded-md hover:scale-105 transition-all ' src={strDrinkThumb} alt={strDrink} />

      </div>
    </Link>

  )
}

export default Card
