// importing mongoose for db connection
import mongoose, { mongo } from "mongoose";


// Import env for the Database url uasge from the .env file
import dotenv from 'dotenv'
dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL


// creating a connection using the mongoose
export const connectDB = () => {
    mongoose.connect(DATABASE_URL, )
.then( () => {
    console.log("Database connected successfully:")
})
.catch( (error) => {
    console.log("Error in Connecting DB")
    console.error(error)
    process.exit(1)
})
}