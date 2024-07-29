import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import Cookies from "js-cookie";
interface UserResponseProps {
    refreshToken: string,
    forgetToken: string,
    isAuthenticated: boolean
    userDetails: undefined | UserDetailsProps
}
const initialState: UserResponseProps = {
    refreshToken: "",
    isAuthenticated: false,
    userDetails: undefined,
    forgetToken: localStorage.getItem("forgetPassword") && localStorage.getItem("forgetPassword") || ""
 }
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action: PayloadAction<{ refreshToken: string, isAuthenticated: boolean }>) => {
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = action.payload.isAuthenticated
        },
        userLoggedIn: (state, action: PayloadAction<{ refreshToken: string, isAuthenticated: boolean,user:UserDetailsProps |undefined}>) => {
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = action.payload.isAuthenticated,
            state.userDetails = action.payload.user,
            Cookies.set("refreshToken",state.refreshToken)
        },
        userForgetToken: (state, action: PayloadAction<{ forgetPasswordToken: string }>) => {
            state.forgetToken = action.payload.forgetPasswordToken,
            localStorage.setItem("forgetPassword", JSON.stringify(action.payload.forgetPasswordToken));
        },
        userDeleteForgetToken: (state) => {
            state.forgetToken = "",
            localStorage.removeItem("forgetPassword");
        },
        userDetails: (state, action: PayloadAction<{ refreshToken: string, isAuthenticated: boolean, user: UserDetailsProps }>) => {
                state.refreshToken = action.payload.refreshToken,
                state.isAuthenticated = action.payload.isAuthenticated,
                state.userDetails = action.payload.user
        },
       
        userLoggedOut: (state) => {
            state.refreshToken = "";
            state.isAuthenticated = false;
            state.userDetails = undefined,
             localStorage.removeItem("token")
        }
    }
});
export const { userRegistration, userLoggedIn,userLoggedOut, userDetails, userForgetToken, userDeleteForgetToken } = authSlice.actions;
export default authSlice.reducer;