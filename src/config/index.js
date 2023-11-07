
const dotenv = require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV || 'Dev',
    PORT: process.env.PORT || 4000,      
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'    
}

module.exports = config;