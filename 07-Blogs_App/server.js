import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000


import { connectDB } from './configs/database.js'
import blogRoutes from './routes/blogRoutes.js'




// Middleware
app.use(express.json());

// Mounting the Routes 
app.use('/api/v1', blogRoutes)


// Defualt Route
app.get('/', (req,res) => {
    res.send('<h1> This is Home Page </h1>')
})



// Conecting DB
connectDB()


app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})
