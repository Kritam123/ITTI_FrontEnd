import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import addressSlice from "./features/address/addressSlice"
import { apiSlice } from "./features/api/apiSlice";
export const store = configureStore({
  reducer:{
      [apiSlice.reducerPath]:apiSlice.reducer,
      auth:authSlice,
      address:addressSlice
  },
  devTools:false,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})
console.log(store.getState().auth.isAuthenticated)
console.log(store.getState().auth.userDetails)

  const initialApp = async()=>{
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}));
  }
  
    initialApp();



export type RootState = ReturnType<typeof store.getState>
