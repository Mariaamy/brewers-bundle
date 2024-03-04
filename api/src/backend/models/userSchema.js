const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, "Please enter your first name."]
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please enter your e-mail'],
        unique: true
    },
    password: {
        type: String
    },
    about: {
        type: String
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },

})

userSchema.set('timestamps', true)

module.exports = mongoose.model("User", userSchema)