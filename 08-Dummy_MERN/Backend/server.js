import express from 'express'
const app = express()
import dotetnv from 'dotenv'
dotetnv.config()
const PORT = process.env.PORT | 3000


// Middlware

app.use(express.json())


app.get('/', (req,res) => {
    res.send('<h1>This is Home Page : </h1>')
})
app.get('/about', (req,res) => {
    res.send('<h1>This is About Page : </h1>')
})

app.listen(PORT, () => {
    console.log(`App is running on PORT : ${PORT}`)
})