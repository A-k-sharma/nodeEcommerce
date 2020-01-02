require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const products = require('./routes/products');
const mongoose =  require('mongoose');

//mongodb connection
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log('DB is connected')
});

//enable cors for all  routes
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/products',products);


app.listen(process.env.PORT,()=>{
    console.log("SERVER IS UP")
})