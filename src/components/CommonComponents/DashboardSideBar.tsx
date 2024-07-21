import { FiHome  } from "react-icons/fi";
import { FaRegUser,FaRegHeart } from "react-icons/fa";
import { IoClipboardOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdRateReview } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DashboardSideBar = () => {
  const {addressId} =  useParams()
  const DashboardSideBarData = [
    {
      title:"Account Dashboard",
      href:"/dashboard/account",
      icon:<FiHome size={20}/>
    },
    {
      title:"My Orders",
      href:"/dashboard/order",
      icon:<IoClipboardOutline size={20}/>
    },
    {
      title:"My Whishlist",
      href:"/dashboard/wishlist",
      icon:<FaRegHeart size={20}/>
    },
    {
      title:"Address Book",
      href:"/dashboard/address",
      icon:<SlLocationPin size={20}/>
    },
    {
      title:"Account Information",
      href:"/dashboard/account/edit",
      icon:<FaRegUser size={20}/>
    },
    {
      title:"My Product Reviews",
      href:"/dashboard/review",
      icon:<MdRateReview size={20}/>
    },
  ]
  const {pathname} =  useLocation();
  const [activeLink, setActiveLink] = useState(pathname);
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname])
  
  return (
    <div className="w-[20%]">
      <ul className="space-y-1">
        {
          DashboardSideBarData && DashboardSideBarData.map((item,index)=>(
            <Link onClick={()=>setActiveLink(item?.href)} className={cn("flex gap-5 items-center text-sm hover:bg-red-700 font-semibold  hover:text-white text-black/80  px-5 py-5 rounded-md", item.href === "/dashboard/address" && `/dashboard/address/edit/${addressId}` === pathname || activeLink === item.href   ? "bg-red-700 text-white":"")} key={index} to={item.href}>
              {item.icon}
            <li>{item.title}</li>
            </Link>

          ))
        }
      </ul>
    </div>
  )
}

export default DashboardSideBar