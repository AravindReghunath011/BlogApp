import jwt from 'jsonwebtoken'


const generateToken = (res,email)=>{
    console.log(process.env.JWT_SECRET,'secret in generate')
    const token = jwt.sign({email},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

    res.cookie('jwt',token,{
        httpOnly:false,
        secure:false,
        sameSite:'strict',
        maxAge:30* 24 * 60 * 60 * 1000  
    })
    console.log('cookie set')
}



export default generateToken