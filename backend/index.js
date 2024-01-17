import express from 'express'
import { dbConnect } from './config/dbConfig.js'
import userRouter from './routes/userRouter.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
    },
  }));
  app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
await dbConnect()
app.use('/',userRouter)


app.listen(8000,()=>{
    console.log('app is serving on port 8000')
})