import {verifyData} from '../helpers/validation.js'
import repository from '../config/repository.js'
import { hashPassword } from '../helpers/bcrypt.js'


export const registerController = async(req,res)=>{

    try {
        let verified =  verifyData(req.body)
        let userExist = await repository.getUserByEmail(req.body.email)
        console.log(userExist,'lll') 
        if(userExist){
            throw new Error('user exists')
        }
    
        if(verified){
            let securepass = await hashPassword(req.body.password)
            let data = {
                name:req.body.name,
                email:req.body.email,
                password:securepass
            }
            let newUser = await repository.createUser(data)
            res.json({user:newUser,message:'success'})
        }
        
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
   
    
}