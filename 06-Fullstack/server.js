import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

// Default Route
app.get('/', (req,res) => {
    res.send('<h1>This is Home Page : </h1>')
})
app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})



