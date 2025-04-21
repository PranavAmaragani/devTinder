const express = require("express");
const app = express();

app.use('/user',
    [(req,res,next)=>{
    console.log("user1")

    // res.send("user ONE")
    next();
    
},
(req,res,next)=>{
    console.log("USER2")
    // res.send("user TWO")
    next();
},

(req,res,next)=>{
    console.log("USER3")
    res.send("user THREE")
    next();
}
])

app.listen(7777,() => { 
    console.log(`server is running on port 7777....`)
})

