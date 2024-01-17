import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    userId:String,
    comments:Array || [],
    
})

const blog = mongoose.model("blog",blogSchema)

export{
    blog
}