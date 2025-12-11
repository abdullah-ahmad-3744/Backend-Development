import { User } from "../models/userSchema.js";

export const deleteUserController = async (req,res) => {
    try {
        let {id} = req.params
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json(
            {
                success: true,
                data : deletedUser,
                message : 'User deleted '
            }
        )
    } catch (error) {
        console.log(error.message)
        console.error(error.message)
        res.status(500).json(
            {
                success:true,
                data : 'Error in deleteing user : ',
                message : 'Internal Server Error : '
            }
        )
    }
}