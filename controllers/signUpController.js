const User = require('../models/localUserSchema');
let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports={
    localSignup: async (req,res)=>{
        const { userName, email, profilePicture, type, password } = req.body;
        console.log("heheheheheh");
        User.findOne({email})
        .then(user=>{
            console.log(user);
            if(!!user){
                console.log('1111');

                res.send(user).status(409);
            }
            else{
                console.log('hehehe');
                const newUser = new User({
                    userName,
                    email,
                    profilePicture,
                    type,
                    password
                });
                newUser.save()
                .then(resp=>{
                    console.log('in save');
                    res.send(resp).status(200);
                })
                .catch(err=>{
                    console.log(err);
                    res.status(400).send(err);
                })
            }
        })
        .catch(err=>{
            res.status(300).send(err);
        })
    },

    localLogin: (req,res)=>{
        const { email, password} = req.body;
        User.findOne({email: email})
        .then(response=>{
            console.log(response);

            if(response){
                if (bcrypt.compareSync(password, response.password)){
                    let userID = JSON.stringify(response.email);
                    token = jwt.sign(userID, process.env.JWT_SECRET);
                    // res.redirect('http://localhost:8080/?#/list');
                    res.status(200).send({email,token});
                } 
                else {
                    // response is OutgoingMessage object that server response http request
                    return res.status(300).send({success: false, message: 'passwords do not match'});
                }
            }
            else {
                // response is OutgoingMessage object that server response http request
                return res.status(400).send({success: false, message: 'email do not match'});
            }
        })
    }
}