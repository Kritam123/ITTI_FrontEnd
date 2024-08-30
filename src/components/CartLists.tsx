import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { RootState } from "@/redux/store";
const CartLists = () => {
  const {carts} = useSelector((state:RootState)=>state.products);
  return (
    <div>
      {" "}
      <h1 className="uppercase w-fit py-1 relative before:absolute before:w-[50%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0 font-semibold text-2xl">
        SHOPPING CART
      </h1>

      {/* cartitems */}
      <div className="flex flex-col gap-3 mt-6">
        {
          carts?.map((item)=>(
          <CartItem cart={item}/>  
          ))
        }
      </div>
    </div>
  );
};

export default CartLists;
