const express = require("express");
const app = express();
const connectDB = require('./config/database.js')
const User = require('./models/user.js')

app.use(express.json());

app.get('/home',async(req,res)=>{
    res.send("hello")
})

//signup api
app.post('/signup',async (req,res) => {
    const user = new User(req.body)

    try{
        await user.save(); 
        res.send('success')

        
    } catch(err){
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).send({ error: messages });

        }
        else{
            res.status(400).send("failed to send")
        }
        
    }
   
})

//get user with EmailId
app.get('/user',async(req,res)=>{
    const userEmailId = req.body.emailId;
    // console.log(userEmailId)
    try {
        const users = await User.find({emailId : userEmailId});
        if (users.length===0) {
            res.status(400).send("No user found with this mailId..")
        } else {
            res.send(users)
        }
        
    } catch (err) {
       res.status(404).send("didn't find the user") 
    }
})

//get user with id
app.get('/userid',async(req,res)=>{
    const id = req.body.id;
    console.log(req.body)
    try {
        const users = await User.findById(id)
        res.send(users)
    } catch (err) {
    res.status(404).send("user id didnt found");
}
}
)

//get feed  api
app.get('/feed',async(req,res)=>{
    try {
        const feed = await  User.find();
        res.send(feed)
    } catch (err) {
        res.status(404).send("something error happened"); 
    }
})

//delete user by id

app.delete('/user',async(req,res)=>{
    const id = req.body.id;
    console.log(id)
    try{
        const user = await User.findByIdAndDelete({_id:id});
        res.send("user deleted successfully")
    }catch(err){
        res.status(404).send("something wrong happenedd!!")
    }
})

//update user 

app.patch('/user/:userId',async(req,res)=>{
    const userId = req.params?.userId;
    const updateData = req.body;
    console.log(updateData)
    try{

        const allowedUpdates = [
            "about",
            "password",
            "gender",
            "skills",
            "photoURL",
            "age",
            
        ];
        const isUpdateAllowed = Object.keys(updateData).every((k)=>allowedUpdates.includes(k));
        if(!isUpdateAllowed){
            throw new Error("update not allowed");
        }

        if(updateData?.skills.length>10){
            throw new Error("skills cannot be more than 10")
        }

        const updatedUser = await User.findOneAndUpdate({_id : userId},updateData,{
            runValidators : true
        });
        
        res.send("updated Successfully");
    }catch(err){
        res.status(404).send("something wrong happenedd!!"+err.message);

    }
})


//connecting to the Database
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

