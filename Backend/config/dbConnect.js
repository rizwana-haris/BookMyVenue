const mongoose = require('mongoose')

//database connection
const dbConnect = async () => {
    try {
        const URI = process.env.MONGO_URI
        await mongoose.connect(URI)
        console.log("Connected to database")

    } catch (error) {
        console.error(`ERROR:${error.message}`)
        process.exit(1)
    }
}

module.exports = dbConnect