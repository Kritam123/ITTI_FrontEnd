import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const Tabs = ({setActiveTab,activeTab}:{setActiveTab:(activeTab:number)=>void,activeTab:number}) => {

  return (
    <div className="flex gap-10 ">
        <Button onClick={()=>setActiveTab(0)} variant={"ghost"} className={cn("text-xl  hover:bg-transparent border-b-4 border-transparent px-0 rounded-none font-semibold",activeTab ===0 ? "border-b-4    border-red-700":"")}>Specifications</Button>
        <Button onClick={()=>setActiveTab(1)} variant={"ghost"} className={cn("text-xl  hover:bg-transparent border-b-4 border-transparent px-0 rounded-none font-semibold",activeTab ===1 ? "border-b-4    border-red-700":"")}>Description</Button>
        <Button onClick={()=>setActiveTab(2)} variant={"ghost"} className={cn("text-xl  hover:bg-transparent border-b-4 border-transparent px-0 rounded-none font-semibold",activeTab ===2 ? "border-b-4    border-red-700":"")}>Reivews</Button>
    </div>
  )
}

export default Tabs