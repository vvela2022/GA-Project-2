const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//get all comments route
router.get('/', (req,res)=>{
    res.send('These are great comments')
})

// const seedData2 = [
//     {   body: 'Sweet picture',
//         post: '630ce9d9a09e9ac5f4b15b1f'
//     },
// ]


// db.Comment.insertMany(seedData2)
// console.log(seedData2)

module.exports = router