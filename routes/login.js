const express = require('express');
const passport = require('passport');
const route = express.Router();
const loginController = require('../controllers/loginController');

route.get('/google',passport.authenticate('google',{

    scope: ['profile','email']
}));

route.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.send('donenene')});

route.get('/facebook',passport.authenticate('facebook',{
    scope: ['profile','email']
}));

route.get('facebook/redirect', passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.send('donenene')});

module.exports = route;