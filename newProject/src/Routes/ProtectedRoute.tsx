
import { Route, Routes,Navigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";


const ProtectedRoute = ({children}:{children:any}) => {
  const user = Cookies.get('jwt')
  
  if(!user) {
    toast.warning('please login to continue')
    return <Navigate to="/"  />
      
  }
return children

};


export default ProtectedRoute;


