import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurant: builder.query<Restaurant, void>({
      query: () => 'apresentacao'
    }),
    getOnSale: builder.query<Restaurant[], void>({
      query: () => 'promocoes'
    }),
    purchase: builder.mutation<PurchaseResponse, Checkout>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetOnSaleQuery, usePurchaseMutation } = api

export default api
