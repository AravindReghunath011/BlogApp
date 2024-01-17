import { Route,Routes } from "react-router-dom"
import Hero from '../pages/Hero'
import BlogList from "@/pages/BlogList"
import BlogDetail from "@/pages/BlogDetail"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import ProtectedRoute from "./ProtectedRoute"
import CreateBlog from "@/pages/CreateBlog"

const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Hero/>}/>

         <Route
        path="/blogs"
        element={
          <ProtectedRoute>
           <BlogList/>
          </ProtectedRoute>
        }
      />

    <Route
        path="/blogdetails"
        element={
          <ProtectedRoute>
          <BlogDetail/>
          </ProtectedRoute>
        }
      />

<Route
        path="/create"
        element={
          <ProtectedRoute>
          <CreateBlog/>
          </ProtectedRoute>
        }
      />

      
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        

        
       
    </Routes>
  )
}

export default UserRoutes