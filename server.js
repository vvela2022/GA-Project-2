// importing express - method-override
const express = require('express')
const methodOverride = require('method-override')
require('./config/db.connection.js')





//evnironment loading .env file into process.env ojbect
require('dotenv').config();

//SESSION extnernal modules
const session = require('express-session')
const MongoStore = require('connect-mongo')
const navLinks = require('./navLinks');
const authRequired = function (req, res, next) {
    if (req.session.currentUser) {
      return next();
    }
  
    return res.redirect("/login");
  };

//CONTROLLER IMPORTS
const postController = require('./controllers/post_controller')
const commentController = require('./controllers/comment_controller')
const authController = require ('./controllers/auth_controller.js')
//app configuration
const app = express()
const PORT = 4000
app.set('view engine','ejs')

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
// app.use(navLinks);

/* SECTION App Config */
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        // secret key is used to sign every cookie to say its is valid
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
        },
    })
);

app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
  });

app.use('/blog', postController)
app.use('/comments',commentController)
// Here we will add the routes for login and register 
app.use("/", authController);



//SERVER
app.listen(PORT, () => console.log('starting server at port:', PORT))

// module.exports = app