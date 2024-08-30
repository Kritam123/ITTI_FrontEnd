import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import PopoverCartItem from "./CommonComponents/PopoverCartItem"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
const NavCartComponet = ({carts}:{carts:CartProduct[],isAuthenticated:boolean}) => {
  const [total,setTotal] = useState<number>();
  useMemo(() => {
    const value =  carts.reduce((sum, curr:CartProduct) =>
    {
      // @ts-ignore
      return sum + parseInt(curr.price * curr.quantity);
      }, 
      0);
    setTotal(value);  
  }, [carts]);
  return (
    <div>
         <div className={cn(" relative", carts.length > 1 ? "h-[30rem]" : "h-[17rem]")}>
                    {
                      <>
                        {
                          carts.length < 1 ?
                            carts.map((item) => (
                              <PopoverCartItem cart={item} />
                            ))
                            :
                            <ScrollArea className="w-[350px] h-[23rem]">

                              {
                                carts?.map((item) => (
                                  <PopoverCartItem cart={item} />
                                ))
                              }
                              <ScrollBar orientation="vertical" /> </ScrollArea>
                        }
                      </>
                    }
                    <div className="absolute  flex-col items-center bottom-0 shadow-sm flex justify-center w-full px-3 border-t border-gray-300 py-3">
                      <div className="flex justify-between w-full">
                        <span className="font-semibold text-lg">Cart SubTotal</span>
                        <span className="font-semibold text-lg">रु {total}</span>
                      </div>
                      <div className="flex justify-between w-full">
                        <Link to={"/checkout/cart"}>
                        <Button
                          variant={"outline"}
                          className=" hover:bg-red-500 p-5 hover:text-white  font-semibold text-md mt-3 border-red-500 border text-red-500"
                        >
                          View Chart
                        </Button>
                        </Link>
                        
                        <Button
                          variant={"outline"}
                          className="bg-red-600 p-5 hover:bg-red-500 hover:text-white  font-semibold text-md mt-3 text-white"
                        >
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default NavCartComponet