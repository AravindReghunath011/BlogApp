import repository from "../config/repository.js"



export const getBlogDetailsController = async(req,res)=>{

    try {
        console.log('entered')
        let blogExist = await repository.getBlogById(req.params.id)
        if(!blogExist){throw new Error('blog doesnt exist')}
        console.log(blogExist,'from controller')
        let username = await repository.getUserById(blogExist.userId)
        let blog = {
            title:blogExist.title,
            content:blogExist.content,
            comments:blogExist.comments,
            username:username.name
        }

        console.log(blog,'blog')

        res.json({blog:blog,message:'success'})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}