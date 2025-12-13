import Post from '../models/postModel.js'
import Like from '../models/likeModel.js'


// Controller for Like post

export const likePostController = async (req, res) => {
    try {
        let { post, user } = req.body
        const like = new Like({
            post, user
        })
        // Saving the likes
        const savedLikes = await like.save()


        // Updating the post after like
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLikes._id } }, { new: true })

        res.json({
            updatedPost
        })
    } catch (error) {
        console.log(error.message)
        console.error(error.message)

        res.status(500).json(
            {
                success: false,
                message: 'Error in liking a post'
            }
        )
    }
}