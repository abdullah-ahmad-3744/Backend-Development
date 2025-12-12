import express from 'express'
const app = express()
import { connectDB } from './configs/database.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000




app.get('/', (req,res) => {
    res.send('<h1> This is Home Page </h1>')
})

// Conecting DB
connectDB()


app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})
