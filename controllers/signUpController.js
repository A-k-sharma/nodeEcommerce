const User = require('../models/localUserSchema');

module.exports={
    localSignup: async (req,res)=>{
        const { userName, email, profilePicture, type, password} = req.body;
        console.log("heheheheheh");
        User.findOne({email})
        .then(user=>{
            console.log(user);
            if(user){
                console.log('1111');

                res.send(user).status(409);
            }
            else{
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
    }
}