import express from 'express'
const router = express.Router()


//Import login controller from controller
import { loginController } from '../controllers/Auth.js'
// Import sign up controller from controllers
import { signUpController } from '../controllers/Auth.js'



router.post('/login',loginController )
router.post('signup', signUpController)



// Export router
export default router