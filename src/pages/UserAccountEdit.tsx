import UserInfoEdit from "@/components/Forms/UserInfoEdit";
import UserPasswordForm from "@/components/Forms/UserPasswordForm";
import { DynamicTitle } from "@/lib/utils/DynamicTitle";
const UserAccountEdit = () => {
    DynamicTitle("Account Information | Dashboard");
  return (
    <div className="ml-10 flex-1">
      {/* Account Information */}
         {/* heading */}
    <div className="w-[50%]">
      <h1 className="uppercase py-1  relative before:absolute before:w-[28%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0  text-xl">EDIT ACCOUNT INFORMATION</h1>
    </div>
    {/* info  */}
    {/* info heading */}
    <div className="mt-5 w-full">
      <h1 className="text-lg text-black/70">ACCOUNT INFORMATION</h1>
      <div className="w-full h-[2px] bg-gray-300 mt-3" />
    </div>
    {/* Information edit parts */}
    <div className="mt-5">
      <UserInfoEdit/>
    </div>
   
 {/* change password */}
  {/* info heading */}
  <div className="mt-10 w-full">
      <h1 className="text-lg text-black/70">CHANGE PASSWORD</h1>
      <div className="w-full h-[2px] bg-gray-300 mt-3" />
    </div>
    {/* Information edit parts */}
    <div className="mt-5">
      <UserPasswordForm/>
    </div>
  </div>
  )
}

export default UserAccountEdit