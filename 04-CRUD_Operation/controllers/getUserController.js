import mongoose from "mongoose"
import { User } from "../models/userSchema.js"

const getUserController = async (req,res) => {
    try {
        // Fetching all the users from the DB 
        const allUsers = await User.find({})

        res.status(200).json(
            {
                success : true,
                data : allUsers,
                message : 'All users are fetched from DB'
            }
        )
    } catch (error) {
        console.log(error.message)
        console.error(error.message)
        res.status(500).json(
            {
                success : true,
                data : 'Error in fetching data: ',
                message : 'Internal Server Error: '
            }
        )
    }
}
export default getUserController