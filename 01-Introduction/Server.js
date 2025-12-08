// Creating a Server using the express
const express = require('express')
const app = express()

// Server Listening
app.listen(3000, ()=> {
    console.log('Server is listening on the port 3000')
})