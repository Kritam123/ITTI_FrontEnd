import { LogIn, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { googleLogout } from '@react-oauth/google';

const TopNavbar = ({isAuthenticated,currentUser,loading}:{isAuthenticated:boolean | undefined,currentUser:UserDetailsProps | undefined,loading:boolean}) => {
  const [logOut,{isError,isLoading,isSuccess,data,error,}] = useLogOutMutation();
  const navigate = useNavigate();
  const handleLogOut = async()=>{
    // @ts-ignore
    await logOut();
    googleLogout();
  }
  useEffect(() => {
    if (isSuccess) {
        const message = data.message || "LogOut Successfully";
        navigate("/customer/account/login",{replace:true})
        toast.success(message);
    }
    if (isError && error) {
        console.log(error)
        if ("data" in error) {

            const errorData = error.data as any;
            toast.error(errorData.message || "Error Occured!");
        } else {
            console.log('An error occured:', error)
        }
    }
}, [isSuccess, isError, data, error])

  return (
    <>
      <nav className="bg-black max-w-[1600px] max-[640px]:hidden flex justify-between  items-center min-[950px]:px-14 px-5 py-2">
        {/* contact  */}
        <div className="flex gap-1 text-white text-[12px]">
          <span>Need help?</span>
          <span className="hover:text-rose-500 cursor-pointer">
            9819037523
          </span>{" "}
          | <span className="hover:text-rose-500 cursor-pointer">Contact</span>
        </div>
        {/*offer scroll */}
        <div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full max-[780px]:hidden flex max-w-xs"
          >
            <CarouselContent className="text-white">
              <CarouselItem className="text-center">
                Wide Seletion of @accessiores
              </CarouselItem>
              <CarouselItem className="text-center">
                Incrideable Monitor in low price
              </CarouselItem>
              <CarouselItem className="text-center">
                Custom PC Builder
              </CarouselItem>
              <CarouselItem className="text-center">
                Custom PC Builder
              </CarouselItem>
              <CarouselItem className="text-center">
                Custom PC Builder
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="bg-transparent max-[880px]:hidden flex text-white border-0 text-md" />
            <CarouselPrevious className="bg-transparent max-[880px]:hidden flex text-white border-0 text-md" />
          </Carousel>
        </div>
        {/* account */}
        <div className="flex gap-2">
          <Link to={ isAuthenticated && currentUser ?"/dashboard/account":"/customer/account/login"}>
          <Button
            variant={"ghost"}
            className="bg-none flex gap-2 hover:bg-transparent hover:text-rose-500 text-white"
          >
            <UserRound size={16} />
            <span className="text-[12px]">Account</span>
          </Button>
          </Link>
          {
            loading ? <div className="border-4 mt-3 border-white border-t-4 border-t-red-600 w-5 h-5 rounded-full animate-spin anim" ></div> : 
            !isAuthenticated && !currentUser ?
            <>
          
            <Link to={"/customer/account/login"}>
         <Button
            variant={"ghost"}
            className="bg-none flex gap-2 hover:bg-transparent hover:text-rose-500 text-white"
          >
            <LogIn size={16} />
            <span className="text-[12px]">Log-In</span>
          </Button>
         </Link>
         </>
         :<>
         <Button
         onClick={handleLogOut}
         disabled={isLoading}
            variant={"ghost"}
            className="bg-none flex gap-2 hover:bg-transparent hover:text-rose-500 text-white"
          >
            <FaSignOutAlt size={16} />
            <span className="text-[12px]">LogOut</span>
          </Button>
         </>
          }
         
          
        </div>
      </nav>
      <div className="bg-rose-600 min-[780px]:hidden justify-center items-center flex w-full py-1.5">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full  max-w-xs"
        >
          <CarouselContent className="text-white">
            <CarouselItem className="text-center">
              Wide Seletion of @accessiores
            </CarouselItem>
            <CarouselItem className="text-center">
              Incrideable Monitor in low price
            </CarouselItem>
            <CarouselItem className="text-center">
              Custom PC Builder
            </CarouselItem>
            <CarouselItem className="text-center">
              Custom PC Builder
            </CarouselItem>
            <CarouselItem className="text-center">
              Custom PC Builder
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default TopNavbar;
