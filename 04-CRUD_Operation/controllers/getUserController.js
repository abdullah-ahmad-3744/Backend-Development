import mongoose from "mongoose"
import { User } from "../models/userSchema.js"

export const getAllUserController = async (req,res) => {
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


export const getUserById = async (req,res) => {
    try {
        const id = req.params.id
        const userById = await User.findById({_id: id})
        // if data not found 
        if (!userById) {
            return res.status(404).json(
                {
                    success:false,
                    message: 'No Data Found'
                }
            )
        }
        // If Data found 
        res.status(200).json(
            {
                success : true,
                data : userById,
                message : 'Fetched a user by Id: '
            }
        )
    } catch (error) {
        console.log(error.message)
        console.error(error.message)
        res.status(500).json(
            {
                success: false,
                data : 'Error in fetching user by Id: ',
                message : 'Internal Server Error :'
            }
        )
    }
}