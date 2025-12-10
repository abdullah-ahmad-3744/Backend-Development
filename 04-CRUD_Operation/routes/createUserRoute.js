// importing express for creating routes
import express from 'express'
// Import the create user controller from the Controllers for use creation
import createUserController from '../controllers/createUserController.js'
// Import get user controller from the controllers for getting the users
import getUserController from '../controllers/getUserController.js'

// creating a Router from the express
const router = express.Router()

router.post ('/createUser', createUserController)
router.get( '/getUsers', getUserController)

// exporting the Router
export default router;

