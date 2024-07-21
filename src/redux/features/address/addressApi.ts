import { apiSlice } from "../api/apiSlice";
import { deleteAddress, getSingleAddress, userAddress } from "./addressSlice";
export const addressApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAddress: builder.mutation({
            query: (data) => ({
                url: "user/address/create/new",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            invalidatesTags: ["getUserAddress"],
        }),
        getUserAddress: builder.query({
            query: () => ({
                url: "user/allAddresses",
                method: "GET",
                credentials: "include" as const,
            }),
            providesTags: ["getUser", "getUserAddress"],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userAddress({
                        address: result.data.data.address.addresses
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }

        }),
        deleteUserAddress: builder.mutation({
            query: ( address ) => ({
                url: "user/delete/address",
                method:"POST",
                body:address,
                credentials: "include" as const
            }),
            invalidatesTags: ["getUserAddress"],
            
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(deleteAddress({
                        AddressId: result.data.data.addressId
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        getAddressById:builder.mutation({
            query:(addressId)=>({
                url:"user/getSingleAddress",
                method:"POST",
                body:addressId,
                credentials: "include" as const,
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(getSingleAddress({
                        address: result.data.data.address
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        updateSingleAddress:builder.mutation({
            query:(data)=>({
                url:"user/update/address",
                method:"POST",
                body:data,
                credentials:"include" as const
            }),
            invalidatesTags:["getUserAddress"],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(getSingleAddress({
                        address: result.data.data.address
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }  
        }),
        updateDefaultBillingAddress:builder.mutation({
            query:(addressId)=>({
                url:"user/makeDefaultBilling",
                method:"POST",
                body:addressId,
                credentials:"include" as const,
            }),
            invalidatesTags:["getUserAddress"]
        }),
        updateDefaultShippingAddress:builder.mutation({
            query:(addressId)=>({
                url:"user/makeDefaultShipping",
                method:"POST",
                body:addressId,
                credentials:"include" as const,
            }),
            invalidatesTags:["getUserAddress"]
        }),
    })
})
export const { useCreateAddressMutation, useUpdateDefaultBillingAddressMutation,useUpdateDefaultShippingAddressMutation,useGetUserAddressQuery, useUpdateSingleAddressMutation,useGetAddressByIdMutation,useDeleteUserAddressMutation } = addressApi;