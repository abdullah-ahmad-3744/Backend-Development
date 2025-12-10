// importing mongoose for creating the schema of a user
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema (
    {
        fistName : {
            type: String,
            required : true,
            maxLength: 50,
        },
        lastName : {
            type : String,
            required : true,
            maxLength : 50,
        },
        email : {
            type : String,
            required : true
        }
    }
)