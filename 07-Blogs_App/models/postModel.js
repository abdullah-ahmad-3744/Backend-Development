import mongoose, { mongo, Mongoose } from "mongoose";

// Route Handler
const postSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required : true
        },
        content : {
            type: String,
            required : true
        },
        postLikes : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref  : 'Likes'
            }
        ],
        
        postComments : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Comments'
            }
        ]
    }
)

export default mongoose.model('Post', postSchema)