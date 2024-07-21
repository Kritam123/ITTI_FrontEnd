import CartLists from "@/components/CartLists"
import CheckOut from "@/components/CheckOut"

const CartProducts = () => {
  return (
    <div className="px-14 pt-8   min-h-screen">
        <div className="flex gap-10">
            <div className="basis-[65%] ">
            <CartLists/>
            </div>
        {/* cartitems */}

        <div className="basis-[35%] sticky top-5 h-[500px] bg-[#F3F3F3] p-5 mt-16 border">
                <CheckOut/>
        </div>
        {/* checkout process section */}

        </div>

    </div>
  )
}

export default CartProducts