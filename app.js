const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
//import routes
const postroutes = require('./routes/post');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());

//middleware
app.use(cors()); //for cross domain rendering
app.use('/post', postroutes);

//routes for home
app.get('/',(req,res)=>{
    res.send("hello");
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},()=>{
    console.log("connectd to db");
});

app.listen(3000);

