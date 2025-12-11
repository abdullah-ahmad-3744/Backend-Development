import { User } from "../models/userSchema.js";


export const updateUserController = async (req,res) => {
    try {
        // Fetching the id 
        let {id} = req.params
        let {firstName, lastName,email} = req.body
        const updatedUser = await User.findByIdAndUpdate(
            {_id:id},
            {firstName , lastName, email}
        )
        res.status(200).json(
            {
                success : true,
                data : updatedUser,
                message : 'User updated successfully'
            }
        )
    } catch (error) {
        console.log(error.message)
        console.error(error.message)
        res.status(500).json(
            {
                success : true,
                data : 'Error in updating user',
                message: 'Internal Server Error : '
            }
        )
    }
}