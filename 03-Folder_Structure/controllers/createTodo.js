const todoSchema = require('../models/todoSchema')


exports.createTodo = async (req,res) => {
    try {
        // Extracting data from the request body
        const {title, description} = req.body
        // Creating a new Todo object
        const response = await todoSchema.create({title, description})
        // Sending response for the success with the success flag
        res.status(200).json(
            {
                success : true,
                data : response,
                message : 'Entry created successfully'
            }
        )
    } catch (error) {
        console.error(error)
        console.log(error.message)
        res.status(500).json(
            {
                success : false,
                data : 'Internal Server Error : ',
                message : error.message
            }
        )
    }
}