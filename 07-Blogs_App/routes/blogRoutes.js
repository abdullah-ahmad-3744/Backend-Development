import express from 'express';
const router = express.Router()
import { commentController } from '../controllers/commentController.js';
import { postCreationController } from '../controllers/postController.js';
import { getAllPostsController } from '../controllers/postController.js';
import { likePostController } from '../controllers/likeController.js';



router.post('/comments/create', commentController)
router.post('/posts/create', postCreationController)
router.get('/posts', getAllPostsController)
router.post('/likes/like', likePostController)



export default router;