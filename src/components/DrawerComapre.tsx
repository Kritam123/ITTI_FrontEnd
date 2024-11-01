import { Button } from "@/components/ui/button"

import ExploreIcons from "@/lib/ExploreIcons";
import { useDeleteAllCompareProductMutation, useDeleteCompareProductMutation } from "@/redux/features/product/productApi";
import { RootState } from "@/redux/store";
import { Scale } from "lucide-react";
import { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const DrawerComapre = ({ setOpen, open }: { setOpen: (open: boolean) => void, open: boolean }) => {
  const { compares } = useSelector((state: RootState) => state.products);
  const [deleteCompare,{isLoading,isSuccess,isError,error}] = useDeleteCompareProductMutation();
  const [deleteAllCompare,{isLoading:allCompareLoading,isSuccess:allCompareSuccess,isError:allCompareIsError,error:allCompareError}] = useDeleteAllCompareProductMutation();
  const deleteCompareItem = async(productId:string)=>{
    try {
      let data = {
        productId
      }
      await deleteCompare(data);
    } catch (error) {
      console.log(error)
    }
  }
  const handleClearAllCompare = async()=>{
      try {
        // @ts-ignore
       await deleteAllCompare();
      } catch (error) {
        console.log(error);

      }
  }
useEffect(() => {
  if(isSuccess){
      toast.success("Product Remove from Compare!");
  }
  if(allCompareSuccess){
    toast.success("All Product Removed from Compare!")
  }
  if(isError || error || allCompareError || allCompareIsError){
    toast.error("Something went wrong!");
  }
}, [isSuccess,isError,error,allCompareError,allCompareIsError,allCompareSuccess])

  return (
    <div>
      {compares.length >= 1 ?
        <>
          <div className="flex gap-4">
            <div className="w-full h-36 border-2 rounded-md relative">
              <div className="absolute -top-2 -right-1">
                <Button onClick={()=>deleteCompareItem(compares[0]?._id)} disabled={!compares[0]?._id || isLoading}  variant={"outline"} className="bg-none p-0 cursor-pointer h-0">
                  <IoCloseCircleOutline size={20} /> 
                </Button>
              </div>
              <div className="flex p-1  gap-5 items-center">
                <img className="w-32 mt-6" src={compares[0]?.productImages[0]?.smallImgUrl} alt="img" />
                <div>
                  <p>
                    {compares[0]?.title}
                  </p>
                  <span>{compares[0]?.price}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-36 border-2 relative rounded-md">
              <div className="absolute -top-2 -right-1">
                <Button variant={"outline"} className="bg-none p-0 h-0 cursor-pointer" onClick={()=>deleteCompareItem(compares[1]?._id)} disabled={!compares[1]?._id || isLoading}>
                  <IoCloseCircleOutline size={20} />
                </Button>
              </div>
              <div className="flex gap-5 items-center">
                {
                  compares[1] &&
                  <img className="w-32" src={compares[1]?.productImages[0]?.smallImgUrl} alt="img" />

                }
                <div>
                  <p>
                    {compares[1]?.title}
                  </p>
                  <span>{compares[1]?.price}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-36 border-2 relative rounded-md">
              <div className="absolute -top-2 -right-1">
                <Button variant={"outline"} className="bg-none p-0 h-0 cursor-pointer" onClick={()=>deleteCompareItem(compares[2]?._id)} disabled={!compares[2]?._id || isLoading}>
                  <IoCloseCircleOutline size={20} />
                </Button>
              </div>
              <div className="flex  gap-5 items-center">
                {
                  compares[2] &&
                  <img className="w-40 " src={compares[2]?.productImages[0]?.smallImgUrl} alt="img" />
                }
                <div>
                  <p>
                    {compares[2]?.title}
                  </p>
                  <span>{compares[2]?.price}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 flex justify-center flex-col flex-1">
              <Link to={"/compare"}> <Button onClick={() => setOpen(false)} className=" py-6 bg-red-700 hover:bg-red-700 text-md font-semibold"><Scale /> <span className="ml-2 ">Compare</span></Button></Link>
              <Button onClick={handleClearAllCompare} disabled={allCompareLoading} variant={"outline"}> Clear All</Button>
            </div>
          </div>
        </>

        :
        <>
          <div className="flex justify-center h-52 relative   gap-10 items-center">
            <Button variant={"ghost"} onClick={() => setOpen(false)} className="absolute  bg-white -top-16 w-16">
              {
                open ?
                  <IoIosArrowDown className="font-bold " size={25} />
                  :
                  <IoIosArrowUp className="font-bold " size={25} />
              }
            </Button>
            <ExploreIcons />
            <p className="text-lg  ">"Oops! It seems you haven't added any <br /> products to compare yet.</p>
            <a href="/#headings">
              <Button onClick={() => setOpen(false)} className=" py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Explore Shop</Button>
            </a>
          </div>
        </>

      }

    </div>
  )
}

export default DrawerComapre