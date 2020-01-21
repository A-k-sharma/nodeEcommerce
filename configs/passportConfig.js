const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/socialUserLogin');


//serialize user function
passport.serializeUser((user,done)=>{
    done(null,user);
});

//deserialize user function
passport.deserializeUser((id,done)=>{
    done(null, id)
});
;
passport.use(
    new GoogleStrategy({
        clientID : '274374976965-4h342c1j6jc7o1b7b22qg7s621b0eg95.apps.googleusercontent.com',
        clientSecret : '1AQR94rZwr-Aq_QvlT6X4skb',
        callbackURL : "/login/google/redirect"
    },(accessToken,refreshToken,profile,done)=>{
        let data = profile._json;
        console.log(data);
        User.find({email: data.email})
        .then(resp=>{
            console.log(resp);
            if(!resp.length){
                const newUser = new User({
                    userName: data.name,
                    email: data.email,
                    profilePicture: data.picture
                });
                newUser.save()
                .then(user=>{
                    done(user);
                })
                .catch(err=>{
                    done(err);
                })
            }
            else{
                done('donnnn');
            }
        })
        .catch(err=>{
            done(err);
        })
    })
)

passport.use(
    new FacebookStrategy({
        clientID: '507135596585050',
        clientSecret: '35751d437f4d08554ebef1feb27b23b3',
        callbackURL: '/login/facebook/redirect',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    (accessToken, refreshToken, profile, done)=>{
        let data = profile._json;
        User.find({email: data.email})
        .then(resp=>{
            console.log(resp);
            if(!resp.length){
                const newUser = new User({
                    userName: data.name,
                    email: data.email,
                    profilePicture: data.picture
                });
                newUser.save()
                .then(user=>{
                    done(user);
                })
                .catch(err=>{
                    done(err);
                })
            }
            else{
                done('donnnn');
            }
        })
        .catch(err=>{
            done(err);
        })
    })
)