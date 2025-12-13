import mongoose from "mongoose"
// Route Handler
const postSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required : true
        },
        body : {
            type: String,
            required : true
        },
        likes : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref  : 'Likes'
            }
        ],
        
        comments : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Comments'
            }
        ]
    }
)

export default mongoose.model('Post', postSchema)