import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT  = process.env.PORT

// Midldewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Setting ejs for view engine
app.set('view engine', 'ejs')

// default route 
app.get('/', (req,res) => {
    res.render('index')
})
// Server listenig
app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`)
})