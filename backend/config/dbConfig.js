import mongoose from "mongoose";

export const dbConnect = async()=>{ 
    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log('Db connected ')) 
        .catch((err)=>{
        throw new Error('Mongo Db error') 

        })      
    } catch (error) {
        console.log(error) 
        setTimeout(() => {
            dbConnect()
        }, 5000);
        
    }
}     