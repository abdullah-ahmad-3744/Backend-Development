// import the schema from the model
import { User} from "../models/userSchema.js";

// creating a new user object using the scheme
const createUserController = async (req,res) => {
    try {
        // extracting data from the request body
        const {firstName, lastName , email} = req.body
        // creating a new object from the schema and with the data from request body
        const response =  await User.create({firstName, lastName, email})
        // console.log(`User successfully saved in DB : `, response)

        res.status(200).json(
            {
                success : true,
                data : response,
                messgae : 'User created successfully'
            }
        )
    } catch (error) {
        console.log("Error in creating the object")
        console.log(error.message)
        console.error(error.message)
        res.status(500).json(
            {
                success: false,
                data : 'Internal server Error:',
                messgae : error.messgae
            }
        )
    }
}

export default createUserController
