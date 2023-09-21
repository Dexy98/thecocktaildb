import React from 'react'
import { Link, Params, useParams } from "react-router-dom";
import { useGetDetailsByIdQuery } from '../redux/service/apiSlice';
//lottie
import loading from "../assets/loading.json";
import { Player } from '@lottiefiles/react-lottie-player'


const Detail: React.FC = () => {
    let { id } = useParams<Params>();
    const { data, isLoading } = useGetDetailsByIdQuery(id);
    console.log("🚀 ~ file: Detail.tsx:8 ~ data:", data)


    if (id === undefined) {
        return <div><h1>errore, nessuna descrizione trovata</h1></div>
    }

    return (
        <>
            <div className='flex gap-4 items-center max-w-5xl w-full mx-auto p-4 '>
                <Link to="/">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className=" text-4xl text-[#FFDB01] hover:text-[#826E00] hover:scale-105  transition-all " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm224-80.09L208.42 240H358v32H208.42L272 336.09l-22.7 22.54L147.46 256 249.3 153.37z"></path></svg>
                </Link>
                <h1 className=' text-[#adb5bd] uppercase'>Torna in Home</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                {isLoading ? (
                    <div>
                        <Player
                            autoplay
                            loop
                            src={loading}
                            style={{ height: '100vh', width: '100%' }}
                        />
                    </div>
                ) : (
                    data?.drinks && data.drinks.map(item => (
                        <div key={item.idDrink} className="max-w-5xl w-full p-4 bg-white shadow-lg rounded-lg mb-4 ">
                            <h1 className="text-3xl font-bold mb-2">{item.strDrink}</h1>
                            <div className="flex items-center max-sm:flex-col">
                                <div className="w-1/2 pr-4 max-sm:w-full">
                                    <img src={item.strDrinkThumb} alt={item.strDrink} className="w-full h-auto rounded-lg" />
                                </div>
                                <div className="w-1/2 max-sm:w-full font-sans">
                                    <h2 className="text-xl font-bold mb-2">Ingredienti:</h2>
                                    {item.strIngredient1 &&
                                        <p>{item.strIngredient1} <span>{item.strMeasure1}</span></p>
                                    }
                                    {item.strIngredient2 &&
                                        <p>{item.strIngredient2} <span>{item.strMeasure2}</span></p>
                                    }
                                    {item.strIngredient3 &&
                                        <p>{item.strIngredient3} <span>{item.strMeasure3}</span></p>
                                    }
                                    <h2 className="text-xl font-bold mb-2">Istruzioni:</h2>

                                    <p className="mt-4">{item.strInstructionsIT ? item.strInstructionsIT : item.strInstructions}</p>
                                    <span>-Scopri di più su  <a className=' text-[#FFDB01] hover:text-[#826E00]' target=' blank' href={`https://www.cookist.it/?s=${item.strDrink}`}>COOKIST</a></span>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )

}

export default Detail
