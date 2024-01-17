import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'




const CreateBlog = () => {
  let [title,setTitle] = useState('')
  let [content,setContent] = useState('')
  const handleSubmit = async()=>{
    axios.post('http://localhost:8000/createblog',{title,content},{withCredentials:true}).then((response:any)=>{
      if(response.data.message=='success'){
        setTitle('')
        setContent('')
        toast.success('Blog created successfully')
      }
      toast.error(response.data.message)
    })
  }
  return (
    <div>
      
        <div className="grid grid-cols-7 grid-rows-5 gap-4 mt-20">
             <div className="col-span-3 row-span-4 col-start-3">
                <Card className='w-full h-[80vh] text-center '>
                    <h1 className='text-5xl font-bold mt-10'>Create Blog</h1>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text " className=' outline outline-1 outline-gray-500 rounded p-2  bg-transparent mt-10 lg:pl-2 w-8/12' placeholder='Title'  />
                    <div className='w-full flex justify-center mt-10'>

                    <Textarea value={content} onChange={(e)=>setContent(e.target.value)}  placeholder='"Share your thoughts and stories with the world."' className='outline outline-1 outline-gray-500 w-8/12 h-56' />
                    </div>
                    <Button onClick={()=>handleSubmit()} className='w-8/12 rounded mt-10'> Post</Button>

                </Card>
             </div>
        </div>
    </div>
  )
}

export default CreateBlog