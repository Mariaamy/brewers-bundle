const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const DBconnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB)
        console.log('Successfully connected to database!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = DBconnect;