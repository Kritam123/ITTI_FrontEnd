import { Button } from "@/components/ui/button";
import { DynamicTitle } from "@/lib/utils/DynamicTitle";
import { Link } from "react-router-dom";

const UserFavList = () => {
    DynamicTitle("My Wishlist | Dashboard");
  return (
    <div className="ml-10 flex-1">
    {/* heading */}
    <div className="w-[50%]">
      <h1 className="uppercase py-1  relative before:absolute before:w-[15%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0  text-xl">MY WISHLIST</h1>
    </div>
    
    <div className="mt-5">
      {
        false ? "true" : <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
          <div className="w-[450px]">
          <img src="https://itti.com.np/_next/image?url=%2Fimages%2Fnoresultfound%2Fnoresult.png&w=640&q=75" alt="img" />

          </div>
            <Link to={"/"}>
        <Button  className="h-12   text-lg font-normal bg-red-700 hover:bg-red-500 px-8">Explore Shop</Button>
      </Link>
        </div>
      }
    </div>
   
  </div>
  )
}

export default UserFavList