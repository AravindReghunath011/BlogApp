import repository from "../config/repository.js"
import { notNullValidation } from "../helpers/notNullValidation.js"



export const blogCreateController = async(req,res)=>{

    try {
        const {content,title } = req.body
        let valid = notNullValidation(req.body)
        if(!valid){throw new Error('Data is not Valid')}
        let user = req.user
        let data = {
            content:content,
            title:title,
            userId:user._id
        }
        let newBlog = await repository.createBlog(data)
        let blogId = newBlog._id.toString()
        let userUpdata = await repository.addBlogId(blogId,user._id)
        console.log(userUpdata,'userupdate')
        res.json({blog:newBlog,message:'success'})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}