const mongoose = require('mongoose')
require('../config/db.connection')

const postSchema = new mongoose.Schema ({
    user: {type: String, required: [true, 'Need a user']},
    body: String,
    image: {type: String, required:[true,'Need an image']},
    location: String
},
{timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post

