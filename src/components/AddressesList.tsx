import AddressItem from "@/components/AddressItem"
const AddressesList = ({addresses}:{addresses:AddressDetailsProps[] | []}) => {
  return (
    <div className="flex flex-1 gap-5 flex-wrap">
        {
            addresses.length>0 && addresses.map((ele)=>(
                <AddressItem data= {ele}/>
            ))
        }
       

        </div>
  )
}

export default AddressesList