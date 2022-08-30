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


//new comment route
router.get('/new', (req,res)=>{
    res.send('New Comment Page')
})

router.post('/',async (req,res,next)=>{
    try{
        const comment = await db.Comment.create(req.body)
        console.log(comment)
        res.redirect(`/blog/${comment.post}`)
    }catch(error){
        req.err = error
        console.log(error)
    }
})

module.exports = router