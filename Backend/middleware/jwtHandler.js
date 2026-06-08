
const { verifyToken } = require('../utils/jwt');

const verifyTokenHandler =  (req,res,next) =>{
    let token = req.headers.authorization;

    if( token && token.startsWith('Bearer ')){
        token = req.headers.authorization.split(' ')[1];

        try{
            const decoded = verifyToken(token);
            req.user = decoded;
            return next();

        } catch(err){
            return res.status(401).json({message:'Invalid token'});
        }
    } else {
        return res.status(401).json({message:'No token provided'});
    }
}

module.exports = verifyTokenHandler;