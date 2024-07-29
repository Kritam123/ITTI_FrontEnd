import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const useProtectRoute = ({ data, isSuccess, isLoading }: {  data: any, isSuccess: boolean, isLoading: boolean }) => {
  const {isAuthenticated,userDetails} = useSelector((state:RootState)=>state.auth);
  const navigate = useNavigate();
  console.log(isAuthenticated,!!userDetails


  )

  useEffect(() => {
    if (!isAuthenticated && !!userDetails ===false && !isLoading ) {
       navigate("/", { replace: true });
    }

  }, [!isAuthenticated,!!userDetails,!isLoading])
}
export default useProtectRoute;