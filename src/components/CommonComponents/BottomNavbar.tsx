import { NavbarData } from "@/lib/NavbarData";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const BottomNavbar = () => {
  return (
    <nav className="max-w-[1600px] bg-black max-[950px]:hidden flex min-[1040px]:px-10 px-6 relative h-14  text-white items-center">
      <ul className="flex justify-around w-full h-full">
        {NavbarData.map((item) => {
          return (
            <div className="group">
              <li
                className="group-hover:bg-red-600 bg-none  ease-in delay-100 transition w-fit cursor-pointer  flex gap-1  items-center  h-full py-5 px-2">
                <span className="text-[17px] text-center">{item.listName}</span>
                {item.listName !=="Custom PC Builder" && <span><ChevronDown size={16} className="flex" /></span>}
              </li>
              <div className={cn("absolute hidden justify-center cursor-pointer  w-full group-hover:flex left-0 right-0 top-[56px]  h-full")}>
                <div className="bg-white z-50 flex flex-wrap px-7 py-10 gap-x-[100px] gap-y-10 shadow-lg   max-w-[95%]  w-fit  h-fit ">
                  {
                    item.listItems?.map((list,index) => {
                      return (
                        <div key={index} className="flex flex-col gap-5">
                          <span className="text-rose-700 font-semibold ">{list.headTitle}</span>
                          <ul className="flex flex-col gap-3">
                            {
                              list?.items?.map((item,index) => {
                                return (
                                  <li key={index} className=" text-black hover:text-rose-500">
                                    {item.title}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavbar;
