import {
  AlignJustify,
  Headset,
  Heart,
  Scale,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icons from "@/lib/Icons";
import MobileNavbar from "./MobileComponents/MobileNavbar";
import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DrawerDialog } from "../Drawer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import queryString from "query-string";
import DrawerComapre from "../DrawerComapre";
import NavCartComponet from "../NavCartComponet";
import { useLazyGetCartProductsQuery, useLazyGetCompareProductsQuery, useLazyGetWhistListProductsQuery } from "@/redux/features/product/productApi";
const Navbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { carts,whistlists,compares } = useSelector((state: RootState) => state.products);
 const [loadCarts,{}] = useLazyGetCartProductsQuery();
 const [loadFavList,{}] = useLazyGetWhistListProductsQuery();
 const [loadCompare,{}] = useLazyGetCompareProductsQuery();
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false);
  const handleSearch = () => {
    navigate(`/search/result?${queryString.stringify({ ...queryString.parse(location.search), q: search })}`);
  };
  useEffect(()=>{
    const func  = async()=>{
      if(isAuthenticated){
        // @ts-ignore
         await loadCarts();
        // @ts-ignore
         await loadFavList();
        //  @ts-ignore
        await loadCompare();
      }
    }
    func();
  },[isAuthenticated])

  return (
    <nav className="w-full max-w-[1600px] flex relative px-3 min-[768px]:h-[110px] min-[1040px]:px-14 justify-between items-center h-[70px]  ">
      <DrawerDialog isCompare={true} open={open} setOpen={setOpen} ><DrawerComapre open={open} setOpen={setOpen} /></DrawerDialog>
      {/* logo */}
      <Link to={"/"} className="min-w-[100px] w-[100px]  min-[768px]:w-[150px]">
        <img
          className="w-full h-full object-fill"
          src="https://admin.itti.com.np/storage/setting/aa5a42f8-8f6a-4310-92f7-718fd2a63b0e.svg"
          alt="logo"
        />
      </Link>
      {/* search */}
      <div className="flex-1 mx-5 max-w-[600px] relative min-[640px]:flex hidden">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter keyword to Search.."
          className="outline-none  w-full ring-0 placeholder:text-md  border border-gray-400 focus-visible:ring-offset-0 focus-visible:ring-0"
        />
        <Button
          onClick={handleSearch}
          className="bg-[#BE1E2D] hover:bg-[#BE1E2D] absolute top-0 right-0"
          variant={"secondary"}
          size={"icon"}
        >
          <Search size={20} className="text-white" />
        </Button>
      </div>
      {/* actions */}
      <div className="flex xl:mx-2 ">
        <Button className="bg-transparent min-[640px]:hidden block text-gray-600 hover:text-red-600 hover:bg-transparent hover:bg-none  gap-3">
          <Headset />
        </Button>
        <Button
          onClick={() => setOpen(true)}
          className="bg-transparent text-gray-600 hover:text-red-600 hover:bg-transparent hover:bg-none flex gap-3"
        >          
          <div className="relative">
          <Scale />
          {
            compares?.length > 0 &&
          <Badge className="absolute -top-3 -right-3 hover:bg-red-500 bg-red-600">{compares?.length}</Badge>
          }
          </div>
          <span className="max-[950px]:hidden block  text-[15px] font-medium">
            Compare
          </span>
        </Button>
        <Button className="bg-transparent text-gray-600 hover:text-red-600  hover:bg-transparent group max-[640px]:hidden flex gap-3 relative">
          <div className="relative">
          <ShoppingCart />{" "}
          {
            carts?.length > 0 &&
          <Badge className="absolute -top-3 -right-3 hover:bg-red-500 bg-red-600">{carts?.length}</Badge>
          }
          </div>
          <span className="max-[950px]:hidden block  text-[15px] font-medium  ">
            Shopping Cart
          </span>
          <div className="absolute top-10 right-2 z-10 group-hover:block hidden">
            <Card 
             className="shadow-lg w-[350px]">
              {carts.length < 1 ? (
                <div className="flex justify-center flex-col items-center">
                  <CardHeader>
                    <Icons />
                  </CardHeader>
                  <CardDescription className="text-[17px] text-center leading-5  ">
                    You have no items in your <br /> Shopping cart.
                  </CardDescription>
                  <CardFooter>
                    <Link to={"/"}> <Button
                      variant={"outline"}
                      className="bg-red-500 hover:bg-red-400 hover:text-white  font-semibold text-md mt-3 text-white"
                    >
                      Continue Shopping
                    </Button></Link>
                  </CardFooter>
                </div>
              ) : (
                <NavCartComponet isAuthenticated={isAuthenticated} carts= {carts}/>
              )}
            </Card>
          </div>
        </Button>
        <Link to={isAuthenticated ? "/dashboard/wishlist" : "/customer/account/login"}>
          <Button className="bg-transparent hover:text-red-600 hover:bg-transparent text-gray-600  flex gap-3">
            <div className="relative">
            <Heart />{" "}
            {
              whistlists?.length > 0 &&
              <Badge className="absolute -top-3 -right-3 hover:bg-red-500 bg-red-600">{whistlists?.length}</Badge>
            }
            </div>
            <span className="max-[950px]:hidden block text-[15px] font-medium">
              My Wish List
            </span>
          </Button>
        </Link>
        <Button
          className="ml-2 min-[950px]:hidden  flex"
          size={"icon"}
          onClick={() => setIsToggle(!isToggle)}
          variant={"outline"}
        >
          {isToggle ? <X /> : <AlignJustify />}
        </Button>
      </div>
      <MobileNavbar isToggle={isToggle} />
    </nav>
  );
};
export default Navbar;
