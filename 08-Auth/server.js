import express from 'express'
const app = express()
// Importing DB connection 
import { connectDB } from './configs/database.js'

// Env pacage for port importing from .env file
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000


// Middleware 
app.use(express.json())


// Default Route 
app.get('/', (req,res) => {
    res.send('<h1> Home Page : </h1>')
})

// Route import and mount
import user from './routes/user.js'
app.use('/api/v1', user)


// Activate App or Server
app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})