import mongoose from 'mongoose'
import Post from '../models/postModel.js'
import Comment from '../models/commentModel.js'

export const commentController = async (req,res) => {
    try {
        let {post, user, commentBody} = req.params

        let comment = new Comment({
            post, user, commentBody
        })
        let savedComment = await comment.save()
    } catch (error) {
        
    }
}