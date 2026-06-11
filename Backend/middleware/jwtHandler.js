
const { verifyToken } = require('../utils/jwt');

//Authentication
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

//Authorization
const verifyRoles = (...roles) => {
    return (req,res,next) =>{
        if(!req.user){
            return res.status(401).json({message:'Unauthorized'});
        }
        const userRole = req.user.role;
        if(!roles.includes(userRole)){
            return res.status(403).json({message:'You dont have permission'}); 
        }
        next();
    }
}

module.exports = {
    verifyTokenHandler,
    verifyRoles
}