import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL

export const connectDB = () => {
    mongoose.connect(DATABASE_URL)
    .then( () => {
        console.log("Database connected successfully: ")
    })
    .catch( (error) => {
        console.log("Error in connecting DB : ")
        console.log(error.message)
        console.error(error.message)
        process.exit(1)
    })
}
