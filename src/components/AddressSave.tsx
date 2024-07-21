import ContactInfoForm from "./Forms/ContactInfoForm"

const AddressSave = ({setOpen}:{setOpen:(open:boolean)=>void}) => {
  return (
    <>
     {/* info heading */}
     <div className="mt-10 w-full">
        <h1 className="text-lg text-black/70">CONTACT INFORMATION</h1>
        <div className="w-full h-[2px] bg-gray-300 mt-3" />
      </div>
      {/* CONTACT INFORMATION  FORM parts */}
      <div className="mt-5">
        <ContactInfoForm  setOpen= {setOpen}/>
      </div>

    </>
  )
}

export default AddressSave