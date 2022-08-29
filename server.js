// importing express - method-override
const express = require('express')
const methodOverride = require('method-override')

//CONTROLLER IMPORTS
const controllers = require('./controllers/post_controller')

//app configuration
const app = express()
const PORT = 6000
app.set('view engine','ejs')

// Middleware
app.use(express.static('public'))
app.use(methodOverride('_method'));

app.use('/blog', controllers)

//home route
// app.get('/')


//SERVER
app.listen(6000, () => console.log('starting server at port:', PORT))

// module.exports = app