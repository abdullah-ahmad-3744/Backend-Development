import mongoose from 'mongoose'
import Post from '../models/postModel.js'
import Comment from '../models/commentModel.js'

export const commentController = async (req, res) => {
    try {
        let { post, user, commentBody } = req.body

        let comment = new Comment({
            post, user, commentBody
        })
        let savedComment = await comment.save()

        // Finding the post by ID and adding the new comment in Comments array
        const updatedPost = await Post.findByIdAndUpdate( post, { $push: { comments: savedComment._id } },{ new: true, runValidators: true } ).populate('comments');

        // Sending response
        res.json({
            post: updatedPost
        })

    } catch (error) {
        res.status(500).json(
            {
                message: 'Error while creating commenttttttt : '
            }
        )
        console.log(error.message)
        console.error(error.message)
    }
}