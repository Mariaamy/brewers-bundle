const mongoose = require('mongoose')

const brewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the name of the brew."]
    },
    equipments: {
        type: [String],
    },
    ingredients: {
        type: [String]
    },
    method: {
        type: String
    },
    measurements: {
        type: [Number]
    },
    log: {
        // Vurder å flytte til eget schema.
        type: [String]
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        immutable: false,
        default: () => Date.now()
    }

})

brewSchema.set('timestamps', true)

module.exports = mongoose.model("Brew", brewSchema)