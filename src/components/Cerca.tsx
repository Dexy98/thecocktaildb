import React, { useState, useEffect } from 'react';
import { useGetcocktailByNameQuery } from "../redux/service/apiSlice";
import Card from './Card';
//interface
import { drink } from '../react-app-env';
//icon
import { BsSearch } from "react-icons/bs";
//lottie
import loading from "../assets/loading.json";
import { Player } from '@lottiefiles/react-lottie-player'

const Cerca = () => {
    const [cerca, setCerca] = useState<string>('negroni');
    const { data, isLoading } = useGetcocktailByNameQuery(cerca);
    const [drinkData, setDrinkData] = useState<drink[] | null>(null);


    useEffect(() => {
        if (!drinkData) {
            if (data && data.drinks) {
                setDrinkData(data.drinks);
            }
        }
    }, [data, drinkData]);

    const handleSearch = () => {
        if (!isLoading && data && data.drinks) {
            setDrinkData(data.drinks);
        }
    }

    return (
        <>
            <br />
            <div className='flex gap-2 items-center'>
                <input
                    className='rounded-md shadow-md shadow-black p-2'
                    value={cerca}
                    onChange={(e) => setCerca(e.target.value)}
                    placeholder='Cerca'
                    type="text"
                    onKeyUp={(e) => (e.key === 'Enter') ? handleSearch() : null}
                />
                <button onClick={handleSearch}>
                    <BsSearch className='text-2xl hover:animate-bounce-oneTime' />
                </button>
            </div>
            <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
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
                    drinkData && drinkData.map(item => (
                        <Card
                            key={item.idDrink}
                            idDrink={item.idDrink}
                            strDrink={item.strDrink}
                            strAlcoholic={item.strAlcoholic}
                            strDrinkThumb={item.strDrinkThumb}
                            strIngredient1={item.strIngredient1}
                            strIngredient2={item.strIngredient2}
                            strIngredient3={item.strIngredient3}
                            strInstructionsIT={item.strInstructionsIT}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default Cerca;
