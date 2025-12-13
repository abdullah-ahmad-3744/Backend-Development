import express from 'express';
const router = express.Router()
import {dummyRoute } from '../controllers/dummyRouteController.js';
import { commentController } from '../controllers/commentController.js';



router.get('/dummy', dummyRoute)
router.post('/comments/create', commentController)



export default router;