const jwt = require('jsonwebtoken');


tokenVerification= (req,res,next)=>{
    if(req.data.token){
        jwt.verify(req.data.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err)
                next(err);
            else {
                req.user_id = decoded;
                next();
            }
        })
    }
    else{
        next({permission:'denied'})
    }
}


module.exports = tokenVerification;