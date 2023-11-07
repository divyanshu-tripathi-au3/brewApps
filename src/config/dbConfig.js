const mongoose = require('mongoose');
const config = require('./index');

// Load schemas 
const bookschema = require('../models/Book')


// connection
const MONGO_URI = config.MONGO_URI+"/brewApps"

const connection = mongoose.createConnection(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
       
})


const Book = connection.model('Book', bookschema)

module.exports = {    
    Book    
}