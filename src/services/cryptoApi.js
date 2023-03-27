import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "2a083f4544mshc01664ccfa885cep1dde14jsnec9d5d056fe2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: "cryptoapi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi
