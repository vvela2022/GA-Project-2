// importing express - method-override
const express = require('express')
const methodOverride = require('method-override')
require('./config/db.connection.js')
const seedData = require('./models/posts_model')

//evnironment loading .env file into process.env ojbect
require('dotenv').config();

//SESSION extnernal modules
const session = require('express-session')
const MongoStore = require('connect-mongo')
const navLinks = require('./controllers/navLinks');


const authRequired = function (req, res, next) {
    if (req.session.currentUser) {
      return next();
    }
  
    return res.redirect("/login");
  };

//CONTROLLER IMPORTS
const postController = require('./controllers/post_controller')
const commentController = require('./controllers/comment_controller')
const authController = require ('./controllers/auth_controller.js');
const db = require('./models');
const User = require('./models/User')
//app configuration
const app = express()
const PORT = process.env.PORT || 4000


app.set('view engine','ejs')

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


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

app.get('/', (req,res)=>{
  res.redirect('/blog')
})


app.use(navLinks);
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
  });

app.use("/", authController);
app.use('/blog', postController)
app.use('/comments',commentController)
// Here we will add the routes for login and register 

async function reloadData() {
	try {
		let deleted = await db.User.deleteMany({});
		console.log(deleted)
		let reloading = await db.User.insertMany(seedData);
		console.log(reloading)
	} catch (err) {
		console.log(err);
	}
}

// reloadData()
//SERVER
app.listen(PORT, () => console.log('starting server at port:', PORT))

// module.exports = app