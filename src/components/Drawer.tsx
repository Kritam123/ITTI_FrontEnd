import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils";
interface CompareDrawerProps {
  open: boolean,
  setOpen: (open: boolean) => void;
  children:React.ReactNode,
  isCompare?:boolean
}
export function DrawerDialog({ open, setOpen,children,isCompare }: CompareDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className={cn("p-3 ",isCompare ? "min-h-52" :"min-h-full")}>
        {children}
      </DrawerContent>
    </Drawer>
  )
}


