// Creating a Server using the express
const express = require('express')
const app = express()


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

// Handling the requests other than the routes
app.use( (req,res) => {
    res.status(404).send("Page Not Found: ")
})


// Post Request for Submitting or adding the data
app.post('/api/cars' , (req,res) => {
    const {carName, carBrand} = req.body
    console.log(carName)
    console.log(carBrand)
    res.send("Car Data submitted successfully.")
})



// Server Listening
app.listen(3000, ()=> {
    console.log('Server is listening on the port 3000')
})