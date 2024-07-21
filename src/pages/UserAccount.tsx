import { Button } from "@/components/ui/button"
import { DynamicTitle } from "@/lib/utils/DynamicTitle"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
const UserAccount = () => {
  const {userDetails} =useSelector((state:RootState)=>state.auth);
  DynamicTitle("My Account | Dashboard");
  return (
    <div className="ml-10 flex-1">
      {/* heading */}
      <div className="w-[50%]">
        <h1 className="uppercase py-1  relative before:absolute before:w-[15%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0  text-xl">MY DASHBOARD</h1>
      </div>
      {/* info  */}
      {/* info heading */}
      <div className="mt-5 w-full">
        <h1 className="text-lg text-black/70">ACCOUNT INFORMATION</h1>
        <div className="w-full h-[2px] bg-gray-300 mt-3" />
      </div>
      {/* contact part */}
      <div className="mt-5">
        <h1 className="font-bold">Contact Information</h1>
        <div className="flex flex-col gap-2 mt-3 mb-5">
        <div className=" space-x-5">
          <span className="font-semibold">Name:</span>
          <span>{userDetails?.firstName} {userDetails?.lastName}</span>
        </div>
        <div className=" space-x-5">
          <span className="font-semibold">Email:</span>
          <span>{userDetails?.email}</span>

        </div>
        </div>

      </div>
      <Link to={"/dashboard/account/edit"}>
        <Button variant={"outline"} className="h-12 border-red-500 text-red-500  text-md font-normal hover:bg-red-700 hover:text-white px-8">Edit</Button>
      </Link>
    </div>
  )
}

export default UserAccount