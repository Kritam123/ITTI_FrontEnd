import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { MoveLeftIcon } from "lucide-react"

const BreadCrumbHelper = ({name}:{name:string | undefined}) => {
  return (
    <div> <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink className="hover:text-red-500 font-semibold text-gray-700" href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
       <MoveLeftIcon/>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
      <BreadcrumbPage className="text-red-500">{name}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb></div>
  )
}

export default BreadCrumbHelper