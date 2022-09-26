const roleCheck =(roles)=>{
    return (req,res,next)=>{
        // roles.push("admin");

        if(req.user.roles.includes(roles)){
            res.status(200).json({error:false,message:`you are authorized  : ${roles}`})
            next();
        }else{
            res.status(403).json({error:true,message:"You are not authorized"});
        }
    }
}

export default roleCheck;