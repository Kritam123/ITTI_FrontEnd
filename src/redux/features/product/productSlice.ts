import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterProductsProps {
    products:[],
    totalCount:number,
    pages:number,
    page:number,
    product:{} | undefined
}


let initialState:FilterProductsProps = {
    products:[],
    totalCount:0,
    page:1,
    pages:0,
    product:{}
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
        getSingleProduct:(state,action:PayloadAction<{product:{}}>)=>{
            state.product = action.payload.product
        }
    }
})



export const {filterProducts,getSingleProduct} =  productSlice.actions;
export default productSlice.reducer;