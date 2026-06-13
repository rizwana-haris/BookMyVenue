import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, USER_URL, VENUE_URL } from "../../constants/constant";
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: data,
            })
        }),
    })
})

export const { useSignupMutation } = userApi