import repository from "../config/repository.js"



export const searchController = async(req,res)=>{

    try {
        let search = req.params.search
        let result = await repository.searchBlog(search)
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}