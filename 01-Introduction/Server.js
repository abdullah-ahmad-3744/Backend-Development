// Creating a Server using the express
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


// Get Request  for the Home page
app.get('/', (req,res) => {
    res.send("This is the response for the Home Page request: ")
})
// Get request for the About Page
app.get('/about', (req,res) => {
    res.send("This is the response for the About Page: ")
})
// Get request for the Services Page
app.get('/services', (req,res) => {
    res.send("This is the response for the Services Page:")
})
// Get request for the Contact Page
app.get('/contact', (req,res) => {
    res.send("This is the response for the Contact Page:")
})



// Post Request for Submitting or adding the data
app.post('/api/cars' , (req,res) => {
    const {carName, carBrand} = req.body
    console.log('Car Name : ',carName)
    console.log('Car Brand : ',carBrand)
    res.send("Car Data submitted successfully.")
})
// Post request for submitting a student dat
app.post('/students/std1', (req,res) => {
    const {studentName, studentRollNum, studentAddress} = req.body
    console.log("Student Name = ", studentName);
    console.log("Student Roll No. = ", studentRollNum);
    console.log("Student Address = ", studentAddress)
    res.send("Student data submitted successfully:")
})


// Handling the requests other than the routes
app.use( (req,res) => {
    res.status(404).send("Page Not Found: ")
})


// Server Listening
app.listen(3000, ()=> {
    console.log('Server is listening on the port 3000')
})