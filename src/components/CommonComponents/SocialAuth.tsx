import { Button } from "../ui/button"
import imageUrl from "../../assets/werr.png"
import {   useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface SocialAuthProps {
  title:string,
  handleClick?:()=>void;
}
const SocialAuth = ({title}:SocialAuthProps) => {
 const [socialAuth,{isError,isSuccess,data,error}] =   useSocialAuthMutation();
 const {isAuthenticated} = useSelector((state:RootState)=>state.auth)
  const login = useGoogleLogin({
    onSuccess:async(response)=>{
        try {
          const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
            headers:{
              Authorization:`Bearer ${response.access_token}`
            }
          })
          console.log(res.data);
          const data = {
            email:res.data.email,
            firstName:res.data.given_name,
            lastName:res.data.family_name
          }
          await socialAuth(data);
        } catch (error) {
          console.log(error)
        }
    }
  });
 
  useEffect(() => {
    if (isSuccess || isAuthenticated) {
        const message = data.message || "Logged In Successfully";
        toast.success(message);
    }
    if (isError && error) {
        console.log(error)
        if ("data" in error) {

            const errorData = error.data as any;
            toast.error(errorData.errors || "Error Occured!");
        } else {
        
            toast.error("Something went Wrong");
        }
    }
}, [isSuccess, isError, data, error,isAuthenticated])
   
  return (
    <div className="mt-6">
 
        <Button onClick={()=>login()} variant={"ghost"} size={"lg"} className="border flex gap-3 border-black/75 w-full h-14">
            {/* google icon */}
            <div className="w-7">
            <img src={imageUrl} alt="google_logo" />

            </div>
            {/* span */}
            <span className="text-[18px] text-purple-900 font-normal">{title}</span>
        </Button>
    </div>
  )
}

export default SocialAuth