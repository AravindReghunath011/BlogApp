import repository from "../config/repository.js"



export const getAllBlogsController = async(req,res)=>{

    try {
        let blogs = await repository.getAllBlogs()
        res.json({blogs:blogs,message:'success'})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}