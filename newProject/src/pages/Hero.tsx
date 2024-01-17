import axios from 'axios'
import Navbar from '../components/Navbar.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate()
  const handleButtonClick = async()=>{
    navigate('/create')
  }
  
  return (
    
     <div className='h-[100vh]  text-center '>
      <Navbar/>
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="col-span-2 col-start-2 row-start-2">
        <h1 className='font-bold text-6xl'> Blog with the best.</h1>

        </div>
        <div className="col-span-2 col-start-2 row-start-3 lg:mt-5 text-xl ">
          <p className='text-xl'>"Empowering writers, bloggers, and creators worldwide. Join the community of choice for expressing your voice with powerful and flexible tools</p>
        </div>
        <div className="col-span-2 col-start-2 row-start-5">
          <Button onClick={()=>handleButtonClick()} className='w-96 rounded font-medium text-xl p-6'> Create Blog</Button>
          {/* <button onClick={()=>handleButtonClick()} className='w-60 hover:bg-gray-300 font-medium outline outline-1 p-4 rounded bg-white text-black  text-xl outline-gray-500'>Register Now</button> */}
        </div>
        </div>
     </div>
   
  )
}

export default Hero