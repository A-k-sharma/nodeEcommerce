const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const environment = process.env.NODE_ENV;


const socialUserSchema = new Schema({
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
    }


})
module.exports = mongoose.model('SocialUser',socialUserSchema);