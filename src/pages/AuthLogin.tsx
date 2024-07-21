import AuthLoginForm from "../components/Forms/AuthLoginForm"
import SocialAuth from "../components/CommonComponents/SocialAuth"
import { useEffect } from "react";
const AuthLogin = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className="flex items-center px-5 py-5 flex-col w-full  min-h-screen">
        <div className="h-full  max-w-[500px] md:w-[500px]">
        <h1 className="text-[25px] text-center font-semibold">CUSTOMER LOGIN</h1>
        <SocialAuth title="Continue with Google"/>
        <div className="w-full h-[1px] mt-10 relative flex items-center justify-center  bg-black/40 ">
        <span className="absolute left-26 -top-4 w-8 h-8 rounded-full flex items-center justify-center bg-white text-gray-400 "><span>OR</span></span>
        </div>
        <AuthLoginForm/>

        </div>
    </div>
  )
}

export default AuthLogin