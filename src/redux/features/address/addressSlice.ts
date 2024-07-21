import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 interface AddressProps {
    addresses:[] | AddressDetailsProps[]
    address:AddressDetailsProps | undefined
 }
const initialState:AddressProps = {
    addresses:[],
    address:undefined 

}

const addressSlice = createSlice({
    name:"address",
    initialState,
    reducers:{
        userAddress:(state,action:PayloadAction<{address:[]}>)=>{
            state.addresses = action.payload.address
        },
        getSingleAddress:(state,action:PayloadAction<{address:undefined}>)=>{
            state.address = action.payload.address;
        },
        deleteAddress:(state,action:PayloadAction<{AddressId:string}>)=>{
                state.addresses = {
                    ...state.addresses.filter((ele)=>ele?._id !==action.payload.AddressId)
                }
        }
    }
})

export const {userAddress,deleteAddress,getSingleAddress} =  addressSlice.actions;
export default addressSlice.reducer;