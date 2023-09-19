import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { responseApi } from '../../react-app-env'


export const cocktailApi = createApi({
    reducerPath: 'cocktailApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
    endpoints: (builder) => ({
        getcocktailByName: builder.query<responseApi, string | undefined>({
            query: (cerca) => `search.php?s=${cerca}`,
        }),
        getDetailsById: builder.query<responseApi, string | undefined>({
            query: (id) => `lookup.php?i=${id}`,
        }),

    }),
})

export const { useGetcocktailByNameQuery, useGetDetailsByIdQuery } = cocktailApi