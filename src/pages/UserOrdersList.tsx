import { DynamicTitle } from "@/lib/utils/DynamicTitle";
import { BiSolidError } from "react-icons/bi";
const UserOrdersList = () => {
    DynamicTitle("My Orders | Dashboard");
  return (
    <div className="ml-10 flex-1">
    {/* heading */}
    <div className="w-[50%]">
      <h1 className="uppercase py-1  relative before:absolute before:w-[15%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0  text-xl">MY ORDERS</h1>
    </div>
    
    <div className="mt-5">
      {
        false ? "true" : <div className="flex items-center  gap-3">
          <BiSolidError className="text-red-800 text-2xl"/>
          <span className="text-black/80 text-md">
          You have no order placed yet

          </span>
        </div> 
      }
    </div>
   
  </div>
  )
}

export default UserOrdersList