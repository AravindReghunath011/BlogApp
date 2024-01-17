import express from 'express'
import {protect} from '../middlewares/authMiddleware.js'
const router = express.Router()
import { registerController } from '../controllers/registerController.js'
import { loginController } from '../controllers/loginController.js'
import { blogCreateController } from '../controllers/blogCreateController.js'
import {blogDeleteController} from '../controllers/blogDeleteController.js'
import { addCommentController } from '../controllers/addCommentController.js'
import { getAllBlogsController } from '../controllers/getAllBlogsController.js'
import {getBlogDetailsController} from '../controllers/getBlogDetailsController.js'
import { logoutController } from '../controllers/logoutController.js'

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/logout',logoutController)
router.post('/createblog',protect,blogCreateController)
router.post('/deleteblog/:id',protect,blogDeleteController)
router.post('/:blogid/addcomment',protect,addCommentController)
router.get('/blogs',protect,getAllBlogsController)
router.get('/blogdetails/:id',getBlogDetailsController)


export default router 