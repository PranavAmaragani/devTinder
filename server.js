const express = require("express");
const app = express();
app.get('/home',(req,res) => {
    console.log("home page is called");
    res.send("Hello from Home page");
})

app.get('/about',(req,res) =>{
    console.log("about page is called");
    res.send("this is the aout page")
})
app.listen(7777,() => { 
    console.log(`server is running on port 7777....`)
})

