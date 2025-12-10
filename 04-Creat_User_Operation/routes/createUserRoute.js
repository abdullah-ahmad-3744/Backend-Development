// importing express for creating routes
import express from 'express'
// Importing the controller from the Controllers for use creation
import createUserController from '../controllers/createUserController.js'


// creating a Router from the express
const Router = express.Router()

Router.post ('/createUser', createUserController)

// exporting the Router
export default Router;

