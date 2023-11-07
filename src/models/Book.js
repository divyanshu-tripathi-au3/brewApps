const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookschema = new Schema({
    title: {
        type: String,
        required: true
    },      
    author: {
        type: String,
        required: true
    },   
    summary: {
        type: String,        
        required: false
    }
           
    
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = bookschema;