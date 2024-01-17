import {verifyData} from '../helpers/validation.js'
import repository from '../config/repository.js'
import { comparePassword, hashPassword } from '../helpers/bcrypt.js'
import generateToken from '../helpers/generateToken.js'


export const loginController = async(req,res)=>{

    try {
        let userExist = await repository.getUserByEmail(req.body.email)
        console.log(userExist,'lll') 
        if(!userExist){
            throw new Error('No user found')
        }
        let verified =  verifyData(req.body)
    
        if(verified){
            let passMatch = await comparePassword(req.body.password,userExist.password)
            if(passMatch){
                 generateToken(res,userExist.email)
                 res.json({message:'success' })
            }else{
                throw new Error('password wrong')
            }
            
            
        }
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}