import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Toaster } from 'sonner';
import UserRoutes from './Routes/UserRoutes'

function App() {
  
  
  return (
    <>
    <Toaster />
     <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
    </Routes>
    </>

  )

   
  
}

export default App
