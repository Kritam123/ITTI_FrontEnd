import { useDeleteCartProductMutation, useUpdateCartSingleMutation } from "@/redux/features/product/productApi";
import { useEffect } from "react"
import { toast } from "sonner";

const CartItem = ({cart}:{cart:CartProduct}) => {
    const [updateCart,{isSuccess,isError,error,data}] = useUpdateCartSingleMutation();
    const [deleteCart,{isSuccess:deleteSuccess,isLoading:deleteLoading,isError:deleteIsError,error:deleteError}]= useDeleteCartProductMutation();
    const handleCartUpdate = async(quantity:string) =>{
          try {
            const {_id} = cart;
            const data = {
              cartId:_id,
              quantity:parseInt(quantity)
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
        <div className="flex justify-around bg-[#F3F3F3]">
            {/* image */}
            <div className="w-36 h-36">
            <img
        className="w-full h-full object-contain"
        src={cart?.productImages ? cart?.productImages :"https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg" }
        alt="png_image"
        onError={(e:React.SyntheticEvent<HTMLImageElement,Event>)=>{e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"}}
      />
            </div>
            {/* details  */}
            <div className="py-3  w-[50%] space-y-10">
                <span className="flex font-semibold text-md text-gray-900">{cart.title}</span>
                <div className="flex gap-2"><p>Price</p>: <span className="font-semibold text-red-600 text-xl">रु {cart.price}</span></div>
            </div>
            {/* actions  */}
            <div className="flex gap-10  items-center flex-col py-3">
                {/* remove */}
                <button disabled={deleteLoading} onClick={handleCartDelete} className="text-[12px]  font-semibold text-red-500 relative  before:absolute before:w-0 before:bottom-0 hover:before:w-full  before:bg-red-600 hover:before:delay-150 before:right-0  before:h-[1px]  hover:before:transition-all before:transition-all before:delay-200 hover:before:left-0" >
                    Remove item
                </button>
                {/* Quantity */}
                <div className="space-x-2">
                    <span className="font-semibold ">Qty:</span>
                    {/* select */}
                    <select defaultValue={cart.quantity} value={cart.quantity} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>handleCartUpdate(e.target.value)} className="w-20 py-1 bg-transparent border border-black rounded-sm  px-3" name="" id="">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => {
                            return (
                                <option className="w-16" key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            )
                        }
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CartItem