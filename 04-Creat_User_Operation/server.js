// Importing express
import express from 'express'
const app = express()

// importing env for using the process object
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT


// Starting th sever which will listen on a PORT 
app.listen(PORT, () => {
    console.log("App is listening on the port 3000")
})