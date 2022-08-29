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

// db.insertMany(seedData,(err, posts)=>{
//     if (err){ console.log(err)}
//     console.log('added test data',seedData)
//     mongoose.connection.close()
// })

// async function reloadData() {
// 	try {
// 		// let deleted = await db.Book.deleteMany({});
// 		// console.log(deleted)
// 		// console.log(deleted);
// 		let reloading = await db.Post.insertMany(seedData);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();