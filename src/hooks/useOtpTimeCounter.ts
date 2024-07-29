import { useForgetPasswordOtpMutation } from "@/redux/features/auth/authApi";
import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import { toast } from "sonner";
 const useOtpCounter = ({timerRef}:{timerRef:React.MutableRefObject<HTMLSpanElement | undefined>})=> {
    const [params,_] = useSearchParams();
   const [timeleft,setTimeLeft] =  useState(localStorage.getItem("otpCodeTimeCounter")&& JSON.parse(localStorage.getItem("otpCodeTimeCounter")!) || 300 )
   const [createOtpCode,{isError,error,isSuccess,data}]  = useForgetPasswordOtpMutation();
   const handleResend = async()=>{
    let email = params.get("email")
    await createOtpCode({email})
    setTimeLeft(300);
   }
    useEffect(()=>{
            const interval = setInterval(()=>{
                if (timeleft >= 0) {
                    const minutes = Math.floor(timeleft / 60);
                    const seconds = timeleft % 60;
                   if( timerRef.current) timerRef.current.innerText = `${minutes}:${seconds}`
                    setTimeLeft(timeleft -1);
                    localStorage.setItem("otpCodeTimerCounter",JSON.stringify(timeleft));
                    
                }
                if(timeleft===0){
                    clearInterval(interval);
                    localStorage.removeItem("otpCodeTimerCounter");
                }
                
            },1000)
            return ()=>{
                clearInterval(interval);
                localStorage.removeItem("otpCodeTimerCounter")

            }
    },[timeleft])
    useEffect(() => {
        if (isSuccess) {
            const message = data.message || `PassWord Reset Link Is In ${""} Email`;
            toast.success(message);
        }
        if (isError && error) {
            if ("data" in error) {
                const errorData = error.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {
            
                toast.error("Something went Wrong");
            }
        }
    }, [isSuccess, isError, data, error])
    return {timeleft,handleResend}

    
}

export default useOtpCounter;