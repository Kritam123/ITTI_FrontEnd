import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

const CheckOut = () => {
  const [text, setText] = useState<string | undefined>("");
  return (
    <div className="p-3">
      <h1 className="text-xl ">SUMMARY</h1>
      <div className="w-full bg-gray-400 mt-3 h-[1px]" />

      {/* subtotal */}
      <div className="flex justify-between mt-3">
        <span className=" text-md">Subtotal</span>
        <span className="text-lg text-red-600 font-semibold">रु 1,53,000</span>
      </div>
      {/* shipping charges */}
      <div className="flex justify-between mt-3">
        <span className="w-56 text-md ">Shipping (Free Shipping - Delivery Date (1-3 working Days). )</span>
        <span className="text-lg text-red-600 font-semibold">रु 0</span>
      </div>
      <div className="w-full bg-gray-400 mt-3 h-[1px]" />
      <div className="py-3 space-y-5">
        <Input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter discount code" className="focus-visible:ring-0 focus-visible:outline outline-black border border-black bg-transparent h-12 text-md px-4"/> 
        <Button className={cn("hover:bg-black/70 bg-black/70 text-md cursor-not-allowed h-12 w-[50%]",text?.length && text?.length > 0 && "cursor-pointer bg-black")}>Apply now</Button>
      </div>
      <div className="w-full bg-gray-400 mt-3 h-[1px]" />
      {/* grand total */}
      <div className="flex justify-between mt-3">
        <span className=" text-md">Grand total</span>
        <span className="text-lg text-red-600 font-semibold">रु 1,53,000</span>
      </div>
      <Button className="w-full mt-3 py-6 bg-red-700 hover:bg-red-500 text-md font-semibold">Proceed to Checkout</Button>

    </div>
  )
}

export default CheckOut