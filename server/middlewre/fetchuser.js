const jwt = require('jsonwebtoken')
const JWT_SECRET ="nilesh09"

const fetchuser=(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({error:"token was wrong"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({error:"token was wrong"});
    }
}

module.exports = fetchuser