//Defines the nature of data the server receives ---Schema
const mongoose = require('mongoose');
const vendorSchema = new mongoose.Schema({
    firstname: {
        //defines field data type
        type: String,
        //remove spaces after field
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
        trim: true,
    },
    dor: {
        type: Date,
        trim: true,
    },
    gender: {
        type: String,
    },
    nin: {
        type: Number,
        trim: true,
    },
    category: {
        type: String,
    },
    contact: {
        type: Number,
        trim: true,
    },
    dor: {
        type: Date,
        trim: true,
    }

});
//Exporting Schema
module.exports = mongoose.model('Vendor', vendorSchema);