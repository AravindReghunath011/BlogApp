import repository from "../config/repository.js"



export const logoutController = async(req,res)=>{

    try {
        res.cookie('jwt','',{
            httpOnly:false,
            expires:new Date(0)
        })
        res.json({message:'success'})
 
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}