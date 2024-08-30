import CartLists from "@/components/CartLists"
import CheckOut from "@/components/CheckOut"
import { LoadingScreen } from "@/components/CommonComponents/LoadingScreen";
import { useLazyGetCartProductsQuery } from "@/redux/features/product/productApi";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
const CartProducts = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const {carts} = useSelector((state:RootState)=>state.products);
 const [loadCarts,{isLoading}] = useLazyGetCartProductsQuery();
  useEffect(()=>{
    const func  = async()=>{
      if(isAuthenticated){
        // @ts-ignore
         await loadCarts();
      }
    }
    func();
  },[isAuthenticated])
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
    <div className="px-14 pt-8   min-h-screen">
       { 
        carts.length >= 1 ? 
        <div className="flex gap-10">
            <div className="basis-[65%] ">
              {
                isLoading ? <LoadingScreen/>:
            <CartLists/>
              }
            </div>
        {/* cartitems */}
        <div className="basis-[35%] sticky top-5 h-[500px] bg-[#F3F3F3] p-5 mt-16 border">
                <CheckOut total={total}/>
        </div>
        {/* checkout process section */}
              
        </div>
        :<>
        <div className="flex justify-center items-center h-screen">No Cart Items</div>
        </>
}
    </div>
  )
}

export default CartProducts