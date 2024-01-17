import repository from "../config/repository.js"



export const blogDeleteController = async(req,res)=>{

    try {
        let blogId = req.params.id
        let userId = req.user._id
        console.log(blogId,'blogid')
        console.log(userId,'userId')
        let newBlog = await repository.deleteBlog(blogId,userId)
        res.json({message:'success'})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}