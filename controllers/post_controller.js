const express = require('express')
const router = express.Router()

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))

// fetch data from models
// const db = require('../models')

//index route
router.get("/", (req,res)=> {
    res.send('HELLO WORLD')
})

module.exports = router