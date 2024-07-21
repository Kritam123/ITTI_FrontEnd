
import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
import ExploreIcons from "@/lib/ExploreIcons";
import { Scale } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
interface CompareDrawerProps {
  open: boolean,
  setOpen: (open: boolean) => void;
}
export function CompareDrawer({ open, setOpen }: CompareDrawerProps) {

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="min-h-52 p-3 ">
        {false ? <div className="flex justify-center h-52   gap-10 items-center">
          <ExploreIcons />
          <p className="text-lg  ">"Oops! It seems you haven't added any <br /> products to compare yet.</p>
          <a href="/#headings">
            <Button onClick={() => setOpen(false)} className=" py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Explore Shop</Button>
          </a>
        </div>
          :
          <>
            <div className="flex gap-4">
              <div className="w-full h-36 border-2 relative">
                <div className="absolute -top-2 -right-1"><IoCloseCircleOutline size={20} /></div>
              </div>
              <div className="w-full h-36 border-2 relative">
                <div className="absolute -top-2 -right-1"><IoCloseCircleOutline size={20} /></div>
              </div>
              <div className="w-full h-36 border-2 relative">
                <div className="absolute -top-2 -right-1"><IoCloseCircleOutline size={20} /></div>
              </div>
              <div className="space-y-3 flex justify-center flex-col flex-1">
                <Link to={"/compare"}> <Button onClick={() => setOpen(false)} className=" py-6 bg-red-700 hover:bg-red-700 text-md font-semibold"><Scale /> <span className="ml-2 ">Compare</span></Button></Link>
                <Button variant={"outline"}> Clear All</Button>
              </div>
            </div>

          </>
        }


      </DrawerContent>
    </Drawer>
  )
}


