const express = require("express");
const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth.js")

//middleware for checking if admin is authenticated

app.use('/admin',adminAuth)

app.get('/user/login',(req,res,next)=>{
    console.log("dont want to authenticate user login");
    res.send("user login successful")
})

app.get('/user/getData',userAuth,(req, res,next)=>{
    console.log("user is authenticated and fetching data from client");
    res.send("Data")
    next();
})


app.get('/admin/getData',(req, res,next)=>{
    console.log("admin is authenticated and fetching data from client");
    res.send("Data")
    next();
})

app.delete('/admin/deleteData',(req, res,next)=>{
    console.log("Deleting data from client");
    res.send("data deleted")
    next();
})




    


app.listen(7777,() => { 
    console.log(`server is running on port 7777....`)
})

