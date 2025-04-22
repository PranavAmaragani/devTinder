const express = require("express");
const app = express();
const connectDB = require('./config/database.js')
const User = require('./models/user.js')

app.get('/home',async(req,res)=>{
    res.send("hello")
})

app.post('/signin',async (req,res) => {
    const user = new User({
        firstName : 'KKohli',
        lastName : 'Amaragani',
        age : 22,
        emailId : "pv@gmail.com", 
        password : "hi@123",
        gender : "male"
    })

    try{
        res.send('success')

        await user.save(); 
    } catch(err){
        res.status(400).send("failed to send")
    }
   
})
connectDB()
.then(
    ()=>{
        console.log("Database Connected Successfully!!!")
        app.listen(7777,()=>{
            console.log("Server listening on port 7777!!")
        })
    }
).catch((err)=>{
    console.log("Something Wrong Happened!!")
}
)

