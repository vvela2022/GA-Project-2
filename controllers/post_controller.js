const express = require('express')
const router = express.Router()

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))

// fetch data from models
require('../models/Post.js')

//index route
router.get("/", (req,res)=> {
    res.send('HELLO WORLD')
})

//create(New) route
router.get('/new', (req,res) => {
    res.send('New Route')
})

//show route
router.get("/:id", (req,res)=> {
    res.send('Show Data')
})

//edit Route
router.get('/:id/edit', (req, res) => {
    res.send('Edit route')
})

module.exports = router