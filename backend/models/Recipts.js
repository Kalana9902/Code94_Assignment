const mongoose = require('mongoose')

const ReciptSchema = new mongoose.Schema({
    id: Number,
    name: String,
    ingredients: String,
    description: String
})

const ReciptModel = mongoose.model("recipts", ReciptSchema)
module.exports = ReciptModel