import { apiSlice } from "../api/apiSlice";
import { CartProducts, filterProducts, getCartProducts, getSingleProduct, ProductReview } from "./productSlice";

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
        }),
        getProductBySlug:builder.query({
            query:(slug)=>({
                url:`/product/${slug}`,
                method:"GET", 
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(getSingleProduct({
                       product:result.data.data.product
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        createReivew:builder.mutation({
            query:({productId,...data})=>({
                url:`/product/${productId}/review/create`,
                method:"POST",
                body:data,
                credentials:"include"
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(ProductReview({
                       review:result.data.data.newReview
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        getCartProducts:builder.query({
            query:()=>({
                url:"product/cartproducts/all",
                method:"GET",
                credentials:"include"
            }),
            providesTags:["getUserCarts"],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;             
                    dispatch(getCartProducts({
                      carts:result.data.data.cartProducts
                    }))
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
        addToCart:builder.mutation({
           query:(data)=>({
            url:"/product/cart/add",
            method:"POST",
             body:data,
            credentials:"include"
           }),
           invalidatesTags:["getUserCarts"],
           async onQueryStarted(_, { queryFulfilled, dispatch }) {
            try {
                const result = await queryFulfilled;
                dispatch(CartProducts({
                  cart:result.data.data.cartProduct
                }))
            } catch (error: any) {
                console.log(error);
            }
        },
        }),
        updateCartSingle:builder.mutation({
            query:({updateType,cartId,quantity})=>({
             url:`/product/cart/update/${cartId}`,
             method:'PUT',
            body:{updateType,quantity},
             credentials:"include" as const
            }),
            invalidatesTags:["getUserCarts"],
         }),
         deleteCartProduct:builder.mutation({
            query:({cartId})=>({
                url:`product/cart/delete/${cartId}`,
                method:'DELETE',
                body:{cartId},
                credentials:"include" as const
            }),
            invalidatesTags:["getUserCarts"]
         })
    })
})

export const {useGetFilterProductsQuery,useAddToCartMutation,useDeleteCartProductMutation,useLazyGetCartProductsQuery,useLazyGetFilterProductsQuery,useLazyGetProductBySlugQuery,useCreateReivewMutation,useGetCartProductsQuery,useUpdateCartSingleMutation} = productApi;