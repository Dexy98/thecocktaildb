import React, { useState, useEffect, Fragment } from 'react';
import { useGetcocktailByNameQuery } from "../redux/service/apiSlice";
//combobox library 
import { Transition, Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
//componenti
import Card from './Card';
//interface
import { drink } from '../react-app-env';
//icon
import { BsSearch } from "react-icons/bs";
//lottie
import loading from "../assets/loading.json";
import { Player } from '@lottiefiles/react-lottie-player'

const Cerca = () => {
    const [cerca, setCerca] = useState<string>(localStorage.getItem('lastSearch') || 'negroni');
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
            localStorage.setItem('lastSearch', cerca);

        }
    }

    const filterOptions = (input: string) => {
        return input === ''
            ? null
            : data?.drinks && data?.drinks.filter((drink) =>
                drink.strDrink
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(input.toLowerCase().replace(/\s+/g, ''))
            )
    }

    return (
        <>
            <br />
            <div className='flex gap-2 items-center'>
                {/* <input
                    className='rounded-md shadow-md shadow-black p-2'
                    value={cerca}
                    onChange={(e) => setCerca(e.target.value)}
                    placeholder='Cerca'
                    type="text"
                    onKeyUp={(e) => (e.key === 'Enter') ? handleSearch() : null}
                /> */}
                <Combobox value={cerca} onChange={setCerca}>
                    <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input placeholder='Cerca' className="rounded-md shadow-md shadow-black p-2 leading-5 focus:ring-0 relative" onChange={(event) => setCerca(event.target.value)} />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition duration-400 ease-out"
                            leave="transition ease-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"

                        >

                            <Combobox.Options className="absolute  mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm transition-all">
                                {filterOptions(cerca) === null ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nessun cocktail.
                                    </div>
                                ) : filterOptions(cerca)?.map((person) => (
                                    <Combobox.Option key={person.idDrink} value={person.strDrink}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#236823] text-white' : 'text-gray-900'
                                            }`
                                        }
                                    >

                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.strDrink}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}

                                        {/* {person.strDrink} */}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox >

                <button onClick={handleSearch}>
                    <BsSearch className='text-2xl hover:animate-bounce-oneTime' />
                </button>
            </div >
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
