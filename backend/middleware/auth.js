const {verifyToken}=require("../auth/jwt");

function auth(req,res,next){
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({msg:"token missing"});
    }
    const token=header.split(" ")[1];
    try{
        const decoded=verifyToken(token);
        req.user=decoded;
        next();
      }catch(err){
        return res.status(401).json({msg:err.message});
      }
}

module.exports={auth};