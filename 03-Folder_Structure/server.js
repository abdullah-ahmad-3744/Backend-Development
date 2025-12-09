import express from 'express'
const app = express();

// defining the port number
// require('dotenv').config()
import dotenv from "dotenv";
dotenv.config();
const port_number =  4000;


// middleware for parsing the data
app.use(express.json())


// Importing routes for Todo API
// const todoRoutes = require('./routes/todos')
import todoRoutes from './routes/todos.js'


// Mounting the Todo API routes
app.use('/api/v1', todoRoutes)




// server listening on a port 
app.listen(port_number, () => {
    console.log(`Server is listening on port ${port_number}`)
})


// Connecting to DB 
import {connectDB} from './configs/database.js';
connectDB();


// Default route 
app.get('/', (req,res) => {
    res.send('<h1> This is Home Page : </h1>')
})