import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterProductsProps {
    products:[],
    totalCount:number,
    pages:number,
    page:number,
    product:{} | Product,
    review:{} | undefined,
    carts:[] | CartProduct[] 
}

let initialState:FilterProductsProps = {
    products:[],
    totalCount:0,
    page:1,
    pages:0,
    product:{},
    review:{},
    carts:JSON.parse(localStorage.getItem("carts")!) || [], 
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        filterProducts:(state,action:PayloadAction<{products:[],totalCount:number,page:0,pages:0}>)=>{
            state.page = action.payload.page,
            state.pages = action.payload.pages,
            state.products = action.payload.products,
            state.totalCount = action.payload.totalCount
        },
        getSingleProduct:(state,action:PayloadAction<{product:Product  | {}}>)=>{
            state.product = action.payload.product
        },
        ProductReview:(state,action:PayloadAction<{review:{}}>)=>{
            state.review = action.payload.review
        },
        // this login user cartproduct slice
        CartProducts:(state,action:PayloadAction<{cart:CartProduct}>)=>{
            // @ts-ignore
            if(!state.carts.includes(action.payload.cart)){
                state.carts = [...state.carts,action.payload.cart];
            }
            // localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        // this is login user cartproduct slice
        getCartProducts:(state,action:PayloadAction<{carts:CartProduct[]}>)=>{
            state.carts = [...action.payload.carts];
            // localStorage.setItem("carts",JSON.stringify(state.carts));
        }
    }
})
export const {filterProducts,getSingleProduct,ProductReview,CartProducts,getCartProducts} =  productSlice.actions;
export default productSlice.reducer;