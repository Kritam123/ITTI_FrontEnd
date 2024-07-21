import AddressesList from "@/components/AddressesList";
import AddressSave from "@/components/AddressSave";
import { LoadingScreen } from "@/components/CommonComponents/LoadingScreen";
import { Button } from "@/components/ui/button";
import { DynamicTitle } from "@/lib/utils/DynamicTitle";
import { useGetUserAddressQuery } from "@/redux/features/address/addressApi";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const UserAddress = () => {
  const {isError,isLoading,isFetching,error} =  useGetUserAddressQuery("getAddress",{skip:false});
  const {addresses} = useSelector((state:RootState)=>state.address);
  DynamicTitle("Address Book | Dashboard");
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if(isError && error) {
      toast.message("Something went wrong!")
    }
  }, [error,isError])
  if(isLoading && isFetching) {
    return (
      <LoadingScreen/>
    )
  }
  return (
    <div className="ml-10 flex-1">
      {/* heading */}
      <div className="w-[50%]">
        <h1 className="uppercase py-1 relative before:absolute before:w-[15%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0   text-xl">{open ? "ADD New Address" : "ADDRESS BOOK"}</h1>
      </div>

      <div className="mt-5">
        {
          open ? <AddressSave setOpen={setOpen} /> : addresses.length >0 ? <AddressesList addresses = {addresses}/> : <div className="flex flex-col   gap-3">

            <span className="text-black/80 text-md">
              You have no other address entries in your address book.
            </span>

          </div>
        }
        <Button onClick={() => setOpen(true)} variant={"outline"} className="h-12 mt-14 w-40 border-red-500 text-red-500  text-md font-normal hover:bg-red-700 hover:text-white px-8">Add New Address</Button>
      </div>

    </div>
  )
}

export default UserAddress