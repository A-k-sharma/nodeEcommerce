const express = require('express');
const route = express.Router();
const signUpController = require('../controllers/signUpController');
const localStrategy = require('passport-local').Strategy;



route.post('/signup',signUpController.localSignup);

route.post('/login',signUpController.localLogin);

module.exports = route;