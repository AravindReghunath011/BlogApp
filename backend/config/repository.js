
import {user} from './userSchema.js'
import {blog} from './blogSchema.js'

export default {
    createUser: async(data)=>{
        const userData = {
            name:data.name,
            email:data.email,
            password:data.password,
            
        }

        console.log(userData)
        const User =  await user.create(userData)
        console.log(User,'repo')
        return User
    },
    createBlog: async(data)=>{
        const blogData = {
            title:data.title,
            content:data.content,
            userId:data.userId
            
        }

        
        const newBlog =  await blog.create(blogData)
        console.log(newBlog,'repo')
        return newBlog
    },

    addBlogId:async(blogId,userId)=>{
        const userUpdate = await user.findByIdAndUpdate(userId,{$push:{blog:blogId}},{new:true})
        return userUpdate
    },
    deleteBlog:async(blogId,userId)=>{
        let blogExist = await user.exists({ _id: userId, blog: { $in: [blogId] } })
        console.log(blogExist,'exist blog')
        if(blogExist){

            const Blog = await blog.findByIdAndDelete(blogId)
            console.log('delete',Blog);
            let userUpdate = await user.findByIdAndUpdate(userId,{$pull:{blog:blogId}},{new:true})
            console.log('after')
            return userUpdate
        }else{throw new Error('Invalid blogId')}
    },
    
    addComment:async(data)=>{
        const {userId,content,blogId,userName} = data
        let id = Math.floor(1000000 + Math.random() * 9000000)
        
        let newComment = await blog.findByIdAndUpdate(blogId,{$push:{comments:{content:content,userId:userId,_id:id,userName:userName}}},{new:true})
        return newComment


    },
    searchBlog:async(data)=>{
        let result = await blog.find()
    },

    getUserByEmail:async(email)=>{
        let User = await user.findOne({email:email})
        console.log(User,'from repo')
        return User
    },
    getUserById:async(id)=>{
        let User = await user.findById(id)
        console.log(User,'from repo user')
        return User
    },
    getBlogById:async(id)=>{
        let Blog = await blog.findOne({_id:id})
        console.log(Blog,'from repo')
        if(!Blog){throw new Error('Blog not exist')}
        return Blog
    },
    getAllBlogs:async()=>{
        let Blogs = await blog.find({})
        console.log(Blogs,'from repo')
        return Blogs;
    }
}