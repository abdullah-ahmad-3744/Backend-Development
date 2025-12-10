// Importing express
import express from 'express'
const app = express()



// Importing the Router from the controller file
import createuserRoute from './routes/createUserRoute.js'




// Importing the DB connection from the configs
import { connectDB } from '../03-Folder_Structure/configs/database.js'


// importing env for using the process object
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000



// // middleware for pasing the dara 
app.use(express.json())



// Mapping the API request with the route 
app.use('/api', createuserRoute)


// Default route for the App
app.get('/', (req,res) => {
    console.log("App is working for the defaulr route")
    res.send('<h1>This is Home Page</h1>')
})


// Connecting DB 
connectDB()




app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})