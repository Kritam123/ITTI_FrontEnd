import { LoadingScreen } from "@/components/CommonComponents/LoadingScreen";
import EditContactInfoForm from "@/components/Forms/EditContactInfoForm"
import { useGetAddressByIdMutation } from "@/redux/features/address/addressApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { toast } from "sonner";
const UserAddressEditById = () => {
  const {addressId} = useParams();
  const [getAddressById,{isLoading,isError,error,data}] = useGetAddressByIdMutation();
  useEffect(()=>{
    async function getAddress(){
      await getAddressById({addressId});
    }
    getAddress();
  },[]);

  useEffect(()=>{
      if(isError && error){
        console.log(error)
        if("data" in error){
          const errorData =error.data as any;
          toast.error(errorData.message || "Error Occured!");
        }else{
          console.log('An error occured:',error)
        }
      }
},[isError,data,error])
  if(isLoading && !data){
    return (
      <LoadingScreen/>
    )
  }
  return (
   <>
    {/* info heading */}
    
    <div className=" flex-1">
    <div className="w-full">
        <h1 className="uppercase py-1 w-[50%] relative before:absolute before:w-[15%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0   text-xl">Edit Address</h1>
        <h1 className="text-lg text-black/70 mt-5">CONTACT INFORMATION</h1>
        <div className="w-full h-[2px] bg-gray-300 mt-2 " />
      </div>
       
         {/* CONTACT INFORMATION  FORM parts */}
      <div className="mt-5">
        <EditContactInfoForm/>
      </div>
      </div>
     
   </>
  )
}

export default UserAddressEditById