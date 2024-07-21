import { useState } from "react"

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex justify-around bg-[#F3F3F3]">
            {/* image */}
            <div className="w-36 h-36">
                <img className="w-full h-full object-contain" src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Facer-27-ed3-curved-180hz-gaming-monitor%2Fthumb%2F8d603a37-bd4a-4e7c-8d0c-79b4aa307d73.webp&w=384&q=75" alt="img" />
            </div>
            {/* details  */}
            <div className="py-3  w-[50%] space-y-10">
                <span className="flex font-semibold text-md text-gray-900">Acer 27" ED3 Curved 180Hz Gaming MonitorAcer 27" ED3 Curved 180Hz Gaming Monitor  ED3 Curved 180Hz Gaming Monitor</span>
                <div className="flex gap-2"><p>Price</p>: <span className="font-semibold text-red-600 text-xl">रु 39,000</span></div>
            </div>
            {/* actions  */}
            <div className="flex gap-10  items-center flex-col py-3">
                {/* remove */}
                <button className="text-[12px]  font-semibold text-red-500 relative  before:absolute before:w-0 before:bottom-0 hover:before:w-full  before:bg-red-600 hover:before:delay-150 before:right-0  before:h-[1px]  hover:before:transition-all before:transition-all before:delay-200 hover:before:left-0" >

                    Remove item
                </button>
                {/* Quantity */}
                <div className="space-x-2">
                    <span className="font-semibold ">Qty:</span>
                    {/* select */}
                    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-20 py-1 bg-transparent border border-black rounded-sm  px-3" name="" id="">
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