const jwt=require("jsonwebtoken");
const SECRET=process.env.SECRET;

function generateToken(user){
    const payload={
        id:user._id,
        name:user.name,
        email:user.email,
    }
    return jwt.sign(payload,SECRET,{expiresIn:"7d"});
}

function verifyToken(token){
    return jwt.verify(token,SECRET);
}

module.exports={generateToken,verifyToken};