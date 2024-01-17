import repository from "../config/repository.js"
import { notNullValidation } from "../helpers/notNullValidation.js"



export const addCommentController = async(req,res)=>{

    try {
        let valid =  notNullValidation(req.body)
        if(!valid){throw new Error('Comment is not valid')}
        let comment = req.body.comment
        let userId = req.user._id
        userId = userId.toString()
        let userName = req.user.name
        let blogId = req.params.blogid
        let blogExist = await repository.getBlogById(blogId)
        console.log(userName,'username')
        let data = {
            userName:userName,
            userId :userId,
            content:comment,
            blogId:blogId
        }
        let newComment = await repository.addComment(data)
        console.log(newComment,'helo')
        res.json({message:'success',blog:newComment})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}