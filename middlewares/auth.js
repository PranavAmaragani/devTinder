//checking Admin authentication

const adminAuth = (req,res,next)=>{
    const token = "xyz";
    const isAuthorized = token==="xyz";
    console.log("Checked authorization token");
    if(!isAuthorized){
        return res.status(401).send("Unauthorized access");
    }else{
        next();
    }
}


//checking user authentication

const userAuth = (req,res,next)=>{
    const token = "xyz";
    const isAuthorized = token==="xyz";
    console.log("Checked authorization token");
    if(!isAuthorized){
        return res.status(401).send("Unauthorized access");
}
else{
    next();

}
}

module.exports = {
    adminAuth,
    userAuth
}
