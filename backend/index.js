const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ReciptModel = require('./models/Recipts')

const app = express()
app.use(cors())
app.use(express.json())


const database = module.exports = () => {
    const connectionParams = {
        UseNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect('mongodb+srv://kalanabimsaradj5:HyUMvS1WD5nB6ZX2@cluster0.jahzqvj.mongodb.net/reciptdb?retryWrites=true&w=majority');
        console.log('Database connected succuessfully')
    }catch(e){
        console.log(e)
        console.log('Connection failed');
    }
}
database();

app.post('/addRecipt', (req, res) => {
 ReciptModel.create(req.body)
 .then(recipts=> res.json(recipts))
 .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    ReciptModel.find({})
    .then(recipts => res.json(recipts))
    .catch(err => res.json(err))
})

app.get('/getRecipt/:id', (req, res) => {
    const id = req.params.id;
    ReciptModel.findById({_id: id})
    .then(recipt => res.json(recipt))
    .catch(err => res.json(err))
})

app.put('/updateRecipt/:id', (req, res) => {
    const id = req.params.id;
    ReciptModel.findByIdAndUpdate({_id: id}, 
        {name: req.body.name,
        ingredients: req.body.ingredients,
        description: req.body.description})
    .then(recipt => res.json(recipt))
    .catch(err => res.json(err))
})

app.delete('/deleteRecipt/:id', (req, res) => {
    const id = req.params.id
    ReciptModel.findByIdAndDelete({_id:id})
    .then(recipt => res.json(recipt))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("Server us Lisrening")
})