const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')

//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//index route
router.get("/", async (req,res,next)=> {
    try{
        const posts = await db.Post.find()
        const context = {posts}
        res.render('index.ejs', context)
    }catch (error){
        req.error = error
        return next()
    }
})

//create(New) route
router.get('/new', (req,res) => {
    res.render('new.ejs')
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
router.get("/:id", async (req,res,next)=> {
    try{
        const post = await db.Post.findById(req.params.id)
        const context = {post}
        res.render('show.ejs', context)
    }catch (error){
        req.error = error
        return next()
    }
})

//edit Route
router.get('/:id/edit', async (req, res, next) => {
    // res.send('Edit route')
    try{
        const editedPost = await db.Post.findById(req.params.id)
        const context = {editedPost}
        res.render('edit.ejs',context)
    } catch (error) {
        req.error = error;
        return next();
    }
   
})

//edit PUT Route
//try-catch - wait until you have data from database, once you have data from database, 
router.put('/:id', async (req, res, next) => {
    try{
        const submittedPost = req.body
        console.log(submittedPost)
        await db.Post.findByIdAndUpdate(req.params.id, submittedPost, {new: true})
        res.redirect(`/blog/${req.params.id}`)
    } catch (error) {
        req.error = error;
        return next()
    }
})

module.exports = router