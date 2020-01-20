const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express(express.json());

mongoose.connect('mongodb+srv://felipe:felipe@cluster0-xdjxw.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//app.use(cors({origin: 'http://localhost:3000'})) libera somente na porta 3000
app.use(cors()) // libera uso de qualquer lugar
app.use(express.json())
app.use(routes);


app.listen(3333);