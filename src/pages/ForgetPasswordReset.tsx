import  { useEffect } from 'react'
import ForgetPassWordResetForm from "../components/Forms/ForgetPassWordResetForm"
const ForgetPasswordReset = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

  return (
    <div className="h-fit flex flex-col items-center py-10  w-full">
    {/* heading */}
    <div className="flex flex-col items-center">
        <h1 className="uppercase text-2xl ">Set a new password</h1>
    </div>
    {/* forgetLinksentForm */}
    <div className="mt-5 w-[550px]">
    <ForgetPassWordResetForm/>
    </div>
</div>
    
  )
}


export default ForgetPasswordReset