require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const logger = require('morgan');
const products = require('./routes/products');
const cart = require('./routes/cart')
const signUp = require('./routes/signUp')
const mongoose =  require('mongoose');
const passport = require('passport');
const login = require('./routes/login')
const passportSetup = require('./configs/passportConfig');
const environment = process.env.NODE_ENV; // development
// const stage = require('./config')[environment];


app.use(passport.initialize());
app.use(passport.session());



if (environment !== 'production') {
    app.use(logger('dev'));
}


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

app.use('/signUp',signUp);
app.use('/login',login);
app.use('/products',products);
app.use('/cart',cart);


// console.log('eee');

app.listen(process.env.PORT,()=>{
    console.log("SERVER IS UP")
})