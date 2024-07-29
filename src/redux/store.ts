import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import addressSlice from "./features/address/addressSlice"
import { apiSlice } from "./features/api/apiSlice";
import productSlice from "./features/product/productSlice";
export const store = configureStore({
  reducer:{
      [apiSlice.reducerPath]:apiSlice.reducer,
      auth:authSlice,
      address:addressSlice,
      products:productSlice
  },
  devTools:false,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})





export type RootState = ReturnType<typeof store.getState>
