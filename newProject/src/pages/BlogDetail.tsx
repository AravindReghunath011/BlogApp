import { Card } from '@/components/ui/card'
import Navbar from '../components/Navbar.tsx'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'


const BlogDetail = () => { 
    let [newComment,setNewComment] = useState('')
    let [userName,setUserName] = useState('')
    interface blogDataType {
        username:String,
        title: String,
        content: String,
        
    }
    let [blogData,setBlogData] =useState<blogDataType | {}>({})
    const location = useLocation()
    const id = location.state
    useEffect(()=>{
        console.log('hey')
        console.log(id,'iiii')
        let url = 'http://localhost:8000/blogdetails/' + id
        console.log(url,'sdfsdf')
        axios.get(url,{withCredentials:true}).then((response:any)=>{
            console.log(response.data,'jj')
            setBlogData(response.data.blog)
            setUserName(response.data.blog.username)
        })

        console.log(id,'hlo')
    },[])
    const addComment = async()=>{
        
        let url = '/' + id + '/addcomment'
        axios.post('http://localhost:8000' + url,{comment:newComment},{withCredentials:true}).then((response)=>{
            if(response.data.message=='success'){
                setNewComment('')
                setBlogData(response.data.blog)
                toast.success('Comment added successfully')
            }
            toast.error(response.data.message)
            
        })
    }
  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-7 grid-rows-7 gap-4 ">
        <div className="col-span-2 col-start-1 row-start-2 lg:mt-14 flex justify-center">
            <div className='text-left '>
            <h1 className='text-xl '>Posted by:</h1>
            <h1 className='text-2xl font-bold'>{userName}</h1>
            </div>
        </div>
        <div className="col-span-3 col-start-3 row-start-2">
            <p className='pb-5' >MARCH 21 2023 </p>
        <h1 className=' text-5xl font-medium '>{blogData.title}</h1>
        </div>
    <div className="col-span-3 row-span-2 col-start-3 row-start-3">
        <p className='lg:mt-3 text-xl  text-gray-400'>{blogData.content}
                Night, often perceived as a time for rest and tranquility, holds a deeper, more mystical allure. As the sun sets, a transformation begins. The world, once vibrant with color, fades into monochromatic hues, casting everything under a veil of mystery. The quiet of the night invites introspection and imagination, stirring in us a sense of wonder. 

        It's a time when the hustle of the day gives way to the peaceful embrace of darkness, allowing the mind to wander and the soul to seek solace in the quietude. The night sky, adorned with stars, speaks to our ancient desires to explore and understand the universe. In this realm of dimmed light and heightened senses, every sound, every whisper of
        the wind, takes on new meaning, enveloping us in the enigmatic beauty of the nocturnal world.
                </p>
            </div>
        <div className="col-span-5 row-span-2 col-start-2 row-start-6">
            <Card className='h-auto px-10 pb-10'>
            <div className='bg-transparent   border-b mt-3  outline-gray-500  p-2 w-11/12 flex justify-between'>

        <input value={newComment} onChange={(e)=>{setNewComment(e.target.value)}} type="text " className='bg-transparent outline-none lg:pl-2 w-10/12' placeholder='Add a comment...'  />
        <button onClick={()=>addComment()} className='mr-2 w-10'>confirm</button>
        </div>
            {
            (blogData.comments || []).map((comment:any)=>{
                return (
                <div className='w-full mt-5 '>
                
                <h1 className='font-bold '>
                    
                    @{comment.userName}
                </h1>
                <p className='ml-3'>
                    {comment.content}
                </p>
            
        </div>)
            }) } 
            

            </Card>
        </div>
        </div>
    </div>
  )
}

export default BlogDetail