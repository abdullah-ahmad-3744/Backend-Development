import express from 'express';
const router = express.Router()
import {dummyRoute } from '../controllers/dummyRouteController.js';
import { commentController } from '../controllers/commentController.js';
import { postCreationController } from '../controllers/postController.js';



router.get('/dummy', dummyRoute)
router.post('/comments/create', commentController)
router.post('/posts/create', postCreationController)



export default router;