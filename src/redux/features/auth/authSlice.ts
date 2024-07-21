import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface UserResponseProps {
    refreshToken:string,
    forgetToken:string,
    isAuthenticated:boolean
    userDetails: undefined | UserDetailsProps
}
 const initialState:UserResponseProps = {
    refreshToken:"",
    isAuthenticated:false,
    userDetails:undefined,
    forgetToken:""
}
 const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state,action:PayloadAction<{refreshToken:string,isAuthenticated:boolean}>)=>{
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = action.payload.isAuthenticated
        },
        userLoggedIn:(state,action:PayloadAction<{refreshToken:string,isAuthenticated:boolean}>)=>{
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated =action.payload.isAuthenticated;
        },
        userForgetToken:(state,action:PayloadAction<{forgetPasswordToken:string}>)=>{
state.forgetToken =action.payload.forgetPasswordToken
        },
        userDeleteForgetToken:(state)=>{
state.forgetToken =""
        },
        userDetails:(state,action:PayloadAction<{refreshToken:string,isAuthenticated:boolean,user:UserDetailsProps}>)=>{
            state.refreshToken = action.payload.refreshToken,
            state.isAuthenticated = action.payload.isAuthenticated,
                state.userDetails = action.payload.user
        },
        userLoggedOut:(state)=>{
            state.refreshToken = "";
            state.isAuthenticated =false;
            state.userDetails = undefined
        }
    }
});
export const {userRegistration,userLoggedIn,userLoggedOut,userDetails,userForgetToken,userDeleteForgetToken} =  authSlice.actions;
export default authSlice.reducer;