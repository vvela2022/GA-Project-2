const mongoose = require('mongoose')
const db = require('./Post.js')

// const Post = require("./Post.js")

const seedData = [
    {
        user: 'David Robles',
        body: 'Had a great time at the beach',
        image: 'https://imgur.com/U8Zp43f',
        location: 'Bali, Indonesia'
    },
    {   user: 'Victoria Vela',
        body: 'That was such an awesome hike!',
        image: 'https://i.imgur.com/gJZu9kY.jpg',
        location: 'Bryce Canyon, Utah'
    }
]
