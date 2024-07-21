import { useEffect } from "react"
import ForgetPassWordLinkSentForm from "../components/Forms/ForgetPassWordLinkSentForm"
const ForgetPassWord = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <div className="h-fit flex flex-col items-center py-10  w-full">
        {/* heading */}
        <div className="flex flex-col items-center">
            <h1 className="uppercase text-2xl ">Forget your password ?</h1>
            <p className="mt-16 ">
            Please enter your email address below to receive a password reset link.
            </p>
        </div>
        {/* forgetLinksentForm */}
        <div className="mt-16 w-[550px]">
        <ForgetPassWordLinkSentForm/>
        </div>
    </div>
  )
}

export default ForgetPassWord