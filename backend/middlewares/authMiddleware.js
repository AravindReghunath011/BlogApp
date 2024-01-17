import jwt from 'jsonwebtoken'
import repository from '../config/repository.js';

 const protect =  async(req,res,next)=>{
    let token ;
    token = req.cookies.jwt;
    console.log(token,'got the token')
    if(token){
        console.log('entered in token');
        try {
           const decoded = jwt.verify(token,process.env.JWT_SECRET) 
           console.log('decoded' , decoded);
            req.user = await repository.getUserByEmail(decoded.email)
            console.log(req.user)
            next()
        } catch (error) {
            res.status(401)
            res.json({message:"Please Login"})

        }
    }else{
        res.status(401)
        res.json({message:"Please Login"})

    }
}

export { protect } 