import { apiSlice } from "../api/apiSlice";
import { userDeleteForgetToken, userDetails, userForgetToken, userLoggedIn, userLoggedOut } from "./authSlice";
type Response ={
    message:string,
    data:{
        refreshToken:string,
        isAuthenticated:boolean
        loggedUser:undefined | UserDetailsProps
    }
}
type LoginData = {
    password:string,
    email:string,
}
export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        // endPoint
        register:builder.mutation<Response,RegisteUserProps>({
            query:(data)=>({
                url:"user/register",
                method:"POST",
                body:data,
                credentials:"include" as const,
            }),
           
        }),
        login:builder.mutation<Response,LoginData>({
            query:({email,password})=>({
                url:"user/login",
                method:"POST",
                body:{email,password},
                credentials:"include" as const
            }),
        invalidatesTags:["getUser"],
            async onQueryStarted(_, {queryFulfilled,dispatch}) {
                const result = await queryFulfilled;
                dispatch(userLoggedIn({
                    refreshToken:result.data.data.refreshToken,
                    isAuthenticated:result.data.data.isAuthenticated,
                    user:result.data.data.loggedUser
                }))
            }
        }),
        forgetPasswordOtp:builder.mutation({
            query:(data)=>({
                url:"user/forgetPassword",
                method:"POST",
                body:data,
                credentials:"include" as const,
            }),
            async onQueryStarted(_, {queryFulfilled,dispatch}) {
                const result = await queryFulfilled;
               dispatch(userForgetToken({
                forgetPasswordToken:result.data.data.passwordToken
               }))
            }
        }),
        forgetPasswordChange:builder.mutation({
            query:(data)=>({
                url:"user/forgetPassword/reset",
                method:"POST",
                body:data,
                credentials:"include" as const,
            }),
            async onQueryStarted(_, {queryFulfilled,dispatch}) {
               dispatch(userDeleteForgetToken())
            }
        }),
        logOut:builder.mutation({
            query:()=>
            ({
                url:"user/logout",
                method:"POST",
                credentials:"include"as const
            }) ,
            async onQueryStarted(_, {dispatch}) {
               try {
                dispatch(userLoggedOut())
               } catch (error) {
                console.log(error)
               }
           
            },
        }),
        socialAuth:builder.mutation({
            query:({email,firstName,lastName})=>({
                url:"user/socialAuth",
                method:"POST",
                body:{email,firstName,lastName},
                credentials:"include" as const
            }),
            invalidatesTags:["getUser"],
            async onQueryStarted(_, {queryFulfilled,dispatch}) {
                const result = await queryFulfilled;
                dispatch(userLoggedIn({
                    refreshToken:result.data.data.refreshToken,
                    isAuthenticated:result.data.data.isAuthenticated,
                    user:result.data.data.loggedUser
                }))
            }
        }),
        updateUser:builder.mutation({
            query:({firstName,lastName})=>({
            url:"user/update/profile",
            method:"POST",
            body:{firstName,lastName},
            credentials:"include" as const,
            }),
            invalidatesTags:["getUser"],
            async onQueryStarted(_, {queryFulfilled,dispatch}) {
                const result = await queryFulfilled;
                dispatch(userDetails({
                    isAuthenticated:result.data.data.isAuthenticated,
                    user:result.data.data.user,
                    refreshToken:result.data.refreshToken
                }))
            }

        }),
        updatePassword:builder.mutation({
            query:({oldPassword,newPassword})=>({
            url:"user/changepassword",
            method:"POST",
            body:{oldPassword,newPassword},
            credentials:"include" as const,
            }),
            invalidatesTags:["getUser"]

        }),

    }),
});
export const {useRegisterMutation,useLoginMutation,useLogOutMutation,useSocialAuthMutation,useUpdateUserMutation,useUpdatePasswordMutation,useForgetPasswordChangeMutation,useForgetPasswordOtpMutation} = authApi; 