const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const environment = process.env.NODE_ENV;
// const stage = require('./config')[environment];


const userSchema = new Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    profilePicture:{
        type: String,
        required: true,
        default: 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
    },
    type:{
        type: String,
        required: true,
        default: 'Customer'
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
    password:{
        type: String,
        required: true,
        default: false,
        trim: true

    }


})

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model('User',userSchema);