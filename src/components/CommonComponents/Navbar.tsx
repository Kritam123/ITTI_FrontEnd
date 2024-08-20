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
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icons from "@/lib/Icons";
import MobileNavbar from "./MobileComponents/MobileNavbar";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DrawerDialog } from "../Drawer";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PopoverCartItem from "./PopoverCartItem";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import queryString from "query-string"
import DrawerComapre from "../DrawerComapre";
const Navbar = () => {
 const {isAuthenticated} =  useSelector((state:RootState)=>state.auth);
  
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const [search,setSearch] = useState("")
  const [open, setOpen] = useState(false);
  const handleSearch = () => {
    navigate(`/search/result?${queryString.stringify({...queryString.parse(location.search),q:search})}`);
  };
 
  return (
    <nav className="w-full max-w-[1600px] flex relative px-3 min-[768px]:h-[110px] min-[1040px]:px-14 justify-between items-center h-[70px]  ">
      <DrawerDialog isCompare={true} open={open} setOpen={setOpen} ><DrawerComapre  setOpen={setOpen}/></DrawerDialog>
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
        onChange={(e)=>setSearch(e.target.value)}
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
          <Scale />
          <span className="max-[950px]:hidden block  text-[15px] font-medium">
            Compare
          </span>
        </Button>

        <Button className="bg-transparent text-gray-600 hover:text-red-600  hover:bg-transparent group max-[640px]:hidden flex gap-3 relative">
          <ShoppingCart />{" "}
          <span className="max-[950px]:hidden block  text-[15px] font-medium  ">
            Shopping Cart
          </span>
          <div className="absolute top-10 right-2 z-10 group-hover:block hidden">
            <Card className="shadow-lg w-[350px]">
              {true ? (
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
                <>
                  <div className={cn(" relative",true ? "h-[30rem]":"h-[17rem]")}>
                    {
                       true? (<>
                      <ScrollArea className="w-[350px] h-[23rem]">
                      <PopoverCartItem/>
                      <PopoverCartItem/>
                      <PopoverCartItem/>
                      <PopoverCartItem/>
                      <PopoverCartItem/>
                      <PopoverCartItem/>
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
                      </>):(
                        <>
                         <PopoverCartItem/>
                        </>
                      )
                    }
                    
                    <div className="absolute  flex-col items-center bottom-0 shadow-sm flex justify-center w-full px-3 border-t border-gray-300 py-3">
                      <div className="flex justify-between w-full">
                        <span className="font-semibold text-lg">Cart SubTotal</span>
                        <span className="font-semibold text-lg">रु 13,24,500</span>
                      </div>
                      <div className="flex justify-between w-full">
                        <Button
                          variant={"outline"}
                          className=" hover:bg-red-500 p-5 hover:text-white  font-semibold text-md mt-3 border-red-500 border text-red-500"
                        >
                          View Chart
                        </Button>
                        <Button
                          variant={"outline"}
                          className="bg-red-600 p-5 hover:bg-red-500 hover:text-white  font-semibold text-md mt-3 text-white"
                        >
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </div>
        </Button>
        <Link to={isAuthenticated ? "/dashboard/wishlist" : "/customer/account/login"}>
        <Button className="bg-transparent hover:text-red-600 hover:bg-transparent text-gray-600  flex gap-3">
          <Heart />{" "}
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
