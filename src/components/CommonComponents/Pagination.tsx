import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const PaginationComponent = ({page,handlePageChange,pages}:{page:number,handlePageChange:(page:number)=>void,pages:number},) => {
  return (
    <>  
    <Pagination>
    <PaginationContent>
      <PaginationItem >
        <Button variant={"outline"}  disabled={page <= 1} className="cursor-pointer" onClick={()=>handlePageChange(page-1)} >Prev</Button>
      </PaginationItem>
      {
        Array.from({length:pages})?.map((_,index)=>(
            <PaginationItem key={index}>
            <PaginationLink className={cn(" rounded-md font-semibold cursor-pointer",page === index+1 ? "bg-red-600 hover:bg-red-600 text-white font-semibold hover:text-white" :"hover:bg-white")} onClick={()=>handlePageChange(index+1)}>{index+1}</PaginationLink>
          </PaginationItem>
         ))
      }
      
     <PaginationItem>
        <Button variant={"outline"} disabled = {page >= pages} className="cursor-pointer"  onClick={()=>handlePageChange(page+1)} >Next</Button>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  </>
  )
}

export default PaginationComponent