import { Button } from '@/components/ui/button.tsx'
import Navbar from '../components/Navbar.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
  

const BlogList = () => {
    let navigate = useNavigate()
    let [blogs,setBlogs] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/blogs',{withCredentials:true}).then((response:any)=>{
            console.log(response.data.blogs)
            setBlogs(response.data.blogs)
            console.log(blogs,'kk')
        })
    },[])

    const handleDetails = (id:string)=>{
        navigate('/blogdetails' ,{state:id})
    }
    function truncateText(text:string) {
        if (text.length > 100) {
            return text.substring(0, 100 - 3) + '...';
        } else {
            return text;
        }
    }
  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-7  gap-4">
             <div className="col-span-3 col-start-3 lg:mt-20">
                <div className='bg-transparent outline outline-1 outline-gray-500 rounded p-2 w-full flex justify-between'>

                <input type="text " className='bg-transparent outline-none lg:pl-2 w-10/12' placeholder='search for blogs'  />
                <button className='lg:pr-2 w-10'>s</button>
                </div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-3 lg:mt-10">
                    {
                        blogs.map((blog: any)=>(
                            <Card className='bg-zinc-900 h-auto lg:p-6 lg:mb-10 '>
                                <h1 className=' text-3xl'>{blog.title}</h1>
                                <p className='lg:mt-3 text-xl  text-gray-500'  >{truncateText(blog.content)}</p>
                            <Button onClick={()=>handleDetails(blog._id)} className='lg:mt-3 rounded '>Read more</Button>
                            </Card>

                        ))
                    }
               
                </div>
                

             </div>
        </div>
    </div>
  )
}

export default BlogList