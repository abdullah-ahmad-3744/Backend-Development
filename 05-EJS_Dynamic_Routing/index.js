import express from 'express'
const app = express()
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const PORT  = process.env.PORT

// Midldewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

// default route 
app.get('/', (req,res) => {
    res.render('index')
})
// About page route
app.get('/about', (req,res) => {
    res.render('about')
})
// Server listenig
app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})