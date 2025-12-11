// importing express for creating routes
import express from 'express'
// Import the create user controller from the Controllers for use creation
import createUserController from '../controllers/createUserController.js'
// Import get user controller from the controllers for getting the users
import {getAllUserController} from '../controllers/getUserController.js'
// Import the controller of get user by Id
import { getUserById } from '../controllers/getUserController.js'
// Import the controller for updating the user
import { updateUser } from '../controllers/updateUserController.js'

// creating a Router from the express
const router = express.Router()

router.post ('/createUser', createUserController)
router.get( '/getUsers', getAllUserController)
router.get('/getUsers/:id', getUserById)
router.put('/updatedUser/:id',updateUser)

// exporting the Router
export default router;

