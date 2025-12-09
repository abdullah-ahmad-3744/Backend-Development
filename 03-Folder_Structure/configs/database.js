// const mongoose = require('mongoose')
import mongoose from 'mongoose'
// require('dotenv').config()
import dotenv from "dotenv";
dotenv.config();


export const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/demoDatabase',{
    } )
.then( () => {
    console.log("Database connected successfully")
})
.catch( (error) => {
    console.log("Error in DB connection")
    console.error(error.message)
    process.exit(1)
})
}