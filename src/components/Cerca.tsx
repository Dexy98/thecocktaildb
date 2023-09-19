import React, { useState, useEffect } from 'react';
import { useGetcocktailByNameQuery } from "../redux/service/apiSlice";
import Card from './Card';
import { drink } from '../react-app-env';
import { BsSearch } from "react-icons/bs";

const Cerca = () => {
    const [drinkData, setDrinkData] = useState<drink[] | null>(null);
    const [cerca, setCerca] = useState<string>('');

    const { data, isLoading } = useGetcocktailByNameQuery(cerca);

    useEffect(() => {
        if (data && data.drinks) {
            setDrinkData(data.drinks);
        } else {
            setDrinkData(null);
        }
    }, [data]);

    const handleSearch = () => {
        if (data && data.drinks) {
            setDrinkData(data.drinks);
        } else {
            setDrinkData(null);
        }
    }

    return (
        <>
            <br />
            <div className='flex gap-2 items-center'>
                <input
                    className='rounded-md shadow-md shadow-black p-2'
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
                    <h1>Sta caricando...</h1>
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
