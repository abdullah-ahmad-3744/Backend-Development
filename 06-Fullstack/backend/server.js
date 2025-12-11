import express from 'express'
const app = express()
import { users } from './data.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000

// Default Route
app.get('/', (req,res) => {
    res.send('<h1>This is Home Page : </h1>')
})
// Seding the users route
app.get('/users', (req,res) => {
    res.send(users)
})
app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})



