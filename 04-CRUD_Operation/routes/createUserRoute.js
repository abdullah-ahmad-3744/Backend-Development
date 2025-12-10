// importing express for creating routes
import express from 'express'
// Importing the controller from the Controllers for use creation
import createUserController from '../controllers/createUserController.js'


// creating a Router from the express
const router = express.Router()

router.post ('/createUser', createUserController)

// exporting the Router
export default router;

