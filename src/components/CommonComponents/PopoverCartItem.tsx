import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDeleteCartProductMutation, useUpdateCartSingleMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
const PopoverCartItem = ({cart}:{cart :CartProduct}) => {
    const [updateCart,{isLoading,isSuccess,isError,error,data}] = useUpdateCartSingleMutation();
    const [deleteCart,{isSuccess:deleteSuccess,isLoading:deleteLoading,isError:deleteIsError,error:deleteError}]= useDeleteCartProductMutation();
    const handleCartUpdate = async(updateType:string) =>{
          try {
            const {_id} = cart;
            const data = {
              updateType,
              cartId:_id
            }
           await updateCart(data);
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
          }
    }
    const handleCartDelete = async() =>{
      try {
        const {_id} = cart;
        const data = {
          cartId:_id
        }
       await deleteCart(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }
}
  useEffect(()=>{
    if(isSuccess){
      toast.success("Cart Updated Successfully")
    }
    if(deleteSuccess){
      toast.success("Cart Deleted SuccessFully")
    }
    if(isError && error ){
      toast.error("Something went wrong")
    }
    if(deleteIsError && deleteError) {
      toast.error("Something went wrong")
    }
  },[isSuccess,isError,data,deleteSuccess,deleteError,deleteIsError])  
    return (
        <div className="flex gap-3 px-3 py-2 ">
            {/* left  */}
            <div className="w-[30%]">
            <img
        className="w-full h-full object-contain"
        src={cart?.productImages ? cart?.productImages :"https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg" }
        alt="png_image"
        onError={(e:React.SyntheticEvent<HTMLImageElement,Event>)=>{e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"}}
      />
            </div>
            {/* right */}
            <div className="flex-1 flex justify-start flex-col">

                <div className="text-wrap  text-gray-900 ">
{cart.title}                    
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                        <span
                            className="before:absolute before:left-0 before:w-full text-md before:h-[2px] before:top-1/2 before:bg-gray-400 flex relative font-semibold text-gray-400
          "
                        >
                            रु {cart.discountPrice}
                        </span>
                        <span className="text-md text-red-500">रु {cart.price}</span>
                    </div>
                </div>
                <div className="flex gap-5">
                <span className="text-gray-800">Qty:</span>
                <div className="flex items-center gap-2">
                  <Button
                    onClick= {
                      ()=>{
                      handleCartUpdate("des")
                      }
                    }
                    disabled={isLoading || cart.quantity ===1}
                    size={"icon"}
                    className={cn(
                      "w-fit px-3 h-7",
                      cart.quantity > 1
                        ? "bg-red-700 hover:bg-red-700"
                        : "bg-red-400 hover:bg-red-400"
                    )}
                  >
                    <FaMinus size={10} />
                  </Button>
                  <span className="text-black border border-black rounded-md text-sm w-10 font-semibold flex justify-center items-center">
                    {cart.quantity}
                  </span>
                  <Button
                  disabled={isLoading}
                    onClick={()=>handleCartUpdate("inc")}
                    className="bg-red-700 px-3 h-7 w-fit hover:bg-red-700"
                  >
                    <FaPlus size={10} />
                  </Button>
                </div>
              </div>
            <Button disabled={deleteLoading} onClick={handleCartDelete} variant={"link"}>Remove Item</Button>
            </div>            
        </div>
        
    );
};

export default PopoverCartItem;
