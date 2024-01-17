import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import axios from 'axios'
import {  toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    let navigate = useNavigate()
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    const handleSubmit = async()=>{
        axios.post('http://localhost:8000/login',{email:email,password:password},{withCredentials:true}).then((response:any)=>{
            console.log(response.data)
            if(response.data.message=='success'){
                toast.success('Login success')
                navigate('/blogs')
            }
            toast.error(response.data.message)

        })
    }
  return (
    <div>
        <div className="grid grid-cols-9 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-4 col-start-4 row-start-2 " >
            <Card className='w-full h-[60vh] flex justify-center text-center'>
                <div className='mt-10'>
                    <h1 className='text-6xl font-bold'>Login</h1>  
                    <p className='font-thin text-sm mt-4 '>Enter you email and password below</p>

                <input onChange={(e)=>setEmail(e.target.value)} type="text " className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your email'  />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your password'  />
                <Button onClick={()=>handleSubmit()} className='w-72 rounded mt-5'>Login</Button>
                <div className='flex  justify-center  text-center  w-full '>
                    <div className='flex gap-2 mt-3'>

                <p className='text-sm'>Don't have an account </p>
                <Link to={'/register'} className='underline text-sm'> signup </Link>
                    </div>
                </div>
                </div>
                
                
            </Card>
        </div>
    </div>
    </div>
  )
}

export default Login