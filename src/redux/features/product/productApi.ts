import { apiSlice } from "../api/apiSlice";
import { filterProducts } from "./productSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getFilterProducts:builder.query({
            query:(query)=>({
                url:"/product/products",
                method:"GET",
                params:{...query}
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(filterProducts({
                        products: result.data.data.products,
                        page:result.data.data.page,
                        pages:result.data.data.pages,
                        totalCount:result.data.data.totalCount
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }
        })
    })
})

export const {useGetFilterProductsQuery,useLazyGetFilterProductsQuery} = productApi;