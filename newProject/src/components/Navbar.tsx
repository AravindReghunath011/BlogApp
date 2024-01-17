
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'


const component = () => {
  const navigate = useNavigate()
  let [cookie,setCookie] = useState('')
  useEffect(()=>{
    let token = Cookies.get('jwt')
    console.log(token,'ghj')
    setCookie(token!)

  },[cookie])
  const handleLogout = async()=>{
    axios.get('http://localhost:8000/logout',{withCredentials:true}).then((response:any)=>{
      if(response.data.message=='success'){
        console.log('helo')
        navigate('/')
        toast.success("Logout success")
      }
      console.log('hey')
      toast.error(response.data.message)
    })
  }
  return (
    <>  
    <div className='sm:hidden'>
      navbar
    </div>
    
      <div className='h-20 bg-trasparent flex justify-around items-center '>
      <Link to="/"><img src="/logo.png" className='h-14 xl:ml-5' alt="" /></Link>
      <ul className='font-sans font-bold flex gap-12  '>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        
      </ul>
      <div className='flex items-center gap-4'>
      
      {
        cookie ? 
        <button onClick={()=>handleLogout()} className='border hover:shadow-gray-400  shadow-sm hover:shadow-sm transition-all duration-600  xl:w-32 xl:h-12'>Logout</button>
        :
      <button onClick={()=>navigate('/login')} className='border hover:shadow-gray-400  shadow-sm hover:shadow-sm transition-all duration-600  xl:w-32 xl:h-12'>Join</button>
      }
      </div>
    </div>
    </>
    
  )
}

export default component