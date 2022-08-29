const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//index route
router.get("/", (req,res)=> {
    res.send('HELLO WORLD')
})

//create(New) route
router.get('/new', (req,res) => {
    res.send('New Route')
})

//Delete Route
router.delete('/:id', async (req, res, next) => {
    try{
        const deletedPost = await db.Post.findByIdAndDelete(req.params.id)
        console.log(deletedPost)
        res.redirect('/blog')   
             
    } catch (error) {
        req.error = error
        return next()
    }

})

//POST route
router.post('/', async (req, res, next) => {
    try{
        const createdPost = await db.Post.create(req.body)
        console.log(createdPost)
        res.redirect('/blog')
        
    } catch (error) {
        req.error = error;
        return next()
    }
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