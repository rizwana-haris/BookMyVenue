import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, VENUE_URL } from "../../constants/constant";
export const api = createApi({
    reducerPath: "venueApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        addVenue: builder.mutation({
            query: (data) => ({
                url: `${VENUE_URL}/add`,
                method: "POST",
                body: data,
            })
        }),
        listVenues: builder.query({
            query: () => ({
                url: `${VENUE_URL}/venues`,
            }),
        }),
        venueDetail: builder.query({
            query: (id) => ({
                url: `${VENUE_URL}/venue-details/${id}`,
            }),
        }),
    }),
})

export const { useAddVenueMutation, useListVenuesQuery, useVenueDetailQuery } = api