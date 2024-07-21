import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userDetails } from "../auth/authSlice";
import { BASE_URL } from "@/redux/constant/constant";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes:["getUser","getUserAddress","getUserAddressById"],
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: () => ({
        url: "user/accessTokenRefresh",
        method: "POST",
        credentials: "include" as const,
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: "user/getUser",
        method: "GET",
        credentials: "include" as const,
        
      }),
      providesTags:["getUser"],
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        dispatch(
          userDetails({
            isAuthenticated:result.data.data.isAuthenticated,
            refreshToken:result.data.data.refreshToken,
            user:result.data.data.user
          })
        );
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;