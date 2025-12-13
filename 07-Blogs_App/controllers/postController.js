import Post from '../models/postModel.js'

// Controller for post Creation 

export const postCreationController = async (req,res) => {

    try {
        let {title, body} = req.body
        const post  = new Post({
            title, body
        })

        // Saving the post 
        const savedPost = await post.save()

        // Sending response 
        res.json({
            post : savedPost
        })
    } catch (error) {
        console.log(error.message)
        console.error(error.message)

        res.status(500).json(
            {
                success : false,
                message : 'Error in post creation'
            }
        )
    }
}