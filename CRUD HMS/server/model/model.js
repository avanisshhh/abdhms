const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
       
    },
    address : {
        type : String,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    country : {
        type : String,
        required: true
    },
    hotelId : {
        type : Number,
        required: true,
       
    },
    date : {
        type : Date,
        required: true,
       
    },
    
    // email : {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;