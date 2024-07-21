
import CustomAccordion from "@/lib/CustomAccordion";
import { cn } from "@/lib/utils";

const MobileNavbar = ( {isToggle}:{isToggle:boolean} ) => {
  return (
    <div
      className={cn(
        "absolute px-3 py-2 min-[950px]:hidden transition-all  flex scale-0 opacity-0 z-50 delay-150 shadow-md min-[768px]:top-[110px] top-[70px] bg-[#ffff] w-full max-h-fit  pb-6 left-0 right-0",
        isToggle && "opacity-100 scale-100"
      )}
    >
      <CustomAccordion isToggle={isToggle}/>
    </div>
  );
};

export default MobileNavbar;
