const express = require('express')
const router = express.Router()

// fetch data from models
const db = require('../models')
const Comment = require('../models/Comment.js')



//translate to JSON
router.use(express.json())

//translate incoming data to strings or arrays
router.use(express.urlencoded({extended: false}))



//get all comments route (do we need this?)
router.get("/", (req, res) => {
    Comment.find({})
              // here we are adding the user to the populate command so we get both the product and user on a review
      .populate("post user")
      .exec((error, allComments) => {
        if (error) {
          console.log(error);
          req.error = error;
          return next();
        }
  
        Product.find({}, (error, allPosts) => {
          if (error) {
            console.log(error);
            req.error = error;
            return next();
          }
  
          const context = {
            reviews: allComments,
            products: allPosts,
          };
  
          return res.render("comments/index", context);
        });
      });
  });

//edit route

//delete route


//new comment route
router.get('/:id/new', async(req,res,next)=>{
    try{
        const post = await db.Post.findById(req.params.id)
        const comments = await db.Comment.find({
            post: req.params.id
        });
        res.render('comments/new.ejs',{
            post: post,
            id: post.id,
            comments: comments
        })
    }catch (error){

        req.error = error
        return next()
    }
    
})

router.delete('/:id', async (req, res, next) => {
    try{
      const comment =  await db.Comment.findByIdAndDelete(req.params.id) 
        res.redirect('/blog')
        console.log(comment)
        
    } catch (error) {
        req.error = error
        return next()
    }
})

router.post('/',async (req,res,next)=>{
    try{
        const comment = await db.Comment.create(req.body)
        user: req.session.currentUser.id
        console.log(comment)
        res.redirect(`/blog`)
    }catch(error){
        req.err = error
        console.log(error)
    }
})

// router.post("/", async(req, res) => {
//     const review = {
//       ...req.body,
      
//       user: req.session.currentUser.id,
//     };
//     const comment =  await db.Comment.findByIdAndDelete(req.params.id) 

//     Comment.create(comment, (error, createdComment) => {
//       if (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//       }
  
//       return res.redirect("/blog");
//     });
//   });

module.exports = router