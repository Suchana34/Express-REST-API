//data for database

const mongoose = require('mongoose');

//create a schema
const PostSchema = mongoose.Schema({
    //no validation data
    //title: String,
    //description: String,
    //date: Date.now,


    //validated data
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);