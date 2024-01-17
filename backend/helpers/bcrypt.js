import bcrypt from 'bcryptjs'

export const hashPassword = async(password)=>{
    let hashPass = await bcrypt.hash(password,10)
    console.log(hashPass)
    return hashPass
}

export const comparePassword = async(password,hashpass)=>{
    console.log(password,hashpass)
     let result = bcrypt.compare(password,hashpass)
     return result
}