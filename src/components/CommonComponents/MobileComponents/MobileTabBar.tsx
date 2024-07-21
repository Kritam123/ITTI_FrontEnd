import { Computer, Home, Search, ShoppingCart, User } from "lucide-react"

const MobileTabBar = () => {
  return (
    <nav className="min-[640px]:hidden w-full z-50 bg-white flex shadow-[0_-10px_60px_-20px_rgba(0,0,0,0.3)] h-16 fixed bottom-0 left-0 right-0">
        <ul className="flex justify-between w-full items-center px-3 py-1">
          <li className="flex flex-col cursor-pointer items-center">
          <Home  size={22} className="text-red-500"/>
          <span className="text-sm text-red-500">Home</span>
          </li>
          <li className="flex flex-col cursor-pointer items-center">
          <Search size={22}/>
          <span className=" text-sm">Search</span>
          </li>
          <li className="flex flex-col cursor-pointer items-center">
          <Computer size={22}/>
          <span className=" text-sm">Custom PC</span>
          </li>
          <li className="flex flex-col cursor-pointer items-center">
          <ShoppingCart size={22}/>
          <span className=" text-sm">Cart</span>
          </li>
          <li className="flex flex-col cursor-pointer items-center">
          <User size={22}/>
          <span className=" text-sm">Account</span>
          </li>
        </ul>
    </nav>
  )
}

export default MobileTabBar