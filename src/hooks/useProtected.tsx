import React, { useEffect } from 'react'
import { redirect } from 'react-router-dom'

const ProtectedRoute = ({children,isAuthenticated,currentUser}:{children:React.ReactNode,isAuthenticated:boolean,currentUser:UserDetailsProps}) => {
    useEffect(()=>{
        if(!isAuthenticated && !currentUser ){
            redirect("/customer/account/login")
        }
    },[isAuthenticated,currentUser,redirect])
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute;