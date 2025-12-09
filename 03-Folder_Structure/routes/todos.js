// import express and create a router from express
// const express = require('express')
import express from 'express'
const router = express.Router()


// Import controller from controllers
import { createTodo } from '../controllers/createTodo.js'

// Defining API routes
router.post('/createTodo', createTodo)


// exporting the router
export default router