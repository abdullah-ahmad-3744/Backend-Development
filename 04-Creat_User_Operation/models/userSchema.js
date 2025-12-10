// importing mongoose for creating the schema of a user
import mongoose from "mongoose";

const userSchema = new mongoose.Schema (
    {
        firstName:{
            type: String,
            required : true,
            maxLength: 50,
        },
        lastName:{
            type : String,
            required : true,
            maxLength : 50,
        },
        email:{
            type : String,
            required : true
        }
    }
)

export const User = mongoose.model('User', userSchema)