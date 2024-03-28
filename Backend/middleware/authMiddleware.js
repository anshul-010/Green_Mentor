const jwt = require("jsonwebtoken")


const auth = (req, res, next)=>{
    const token = req.headers.authorization
    if(!token){
        return res.send({msg:"please provide token"})
    }
    else{
        jwt.verify(token, 'secret_key', function(err, decoded) {
            if(err){
                return res.send({msg:err.message})
            }
            else{
                req.body.userId = decoded.userId
                req.body.user = decoded.user
                next()
            }
          });

    }
   
}

module.exports = {auth}