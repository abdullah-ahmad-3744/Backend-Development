// import the schema from the model
import { userSchema } from "../models/userSchema.js";


// creating a new user object using the scheme
const createUserController = async (req,res) => {
    try {
        // extracting data from the request body
        const {firstName, lastName , email} = req.body

        // creating a new object from the schema and with the data from request body
        const response = await userSchema.create({firstName, lastName, email})

        res.status(200).json(
            {
                success : true,
                data : response,
                messgae : 'User created successfully'
            }
        )
    } catch (error) {
        console.log("Error in creating the object")
        console.error(error.messgae)
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
