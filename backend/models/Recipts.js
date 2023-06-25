const mongoose = require('mongoose')

// structure of the recip
const ReciptSchema = new mongoose.Schema({
    id: Number,
    name: String,
    ingredients: String,
    description: String
})

//creating and exporting RecipMoel
const ReciptModel = mongoose.model("recipts", ReciptSchema)
module.exports = ReciptModel