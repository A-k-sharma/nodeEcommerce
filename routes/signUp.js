const express = require('express');
const route = express.Router();
const signUpController = require('../controllers/signUpController');
const localStrategy = require('passport-local').Strategy;



route.post('/',signUpController.localSignup);

module.exports = route;