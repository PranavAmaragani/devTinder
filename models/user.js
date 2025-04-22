const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


    firstName : {
        type : String,
        required : [true,  'Please enter your first name']
    },
   lastName : {
       type : String,
        required : true
    },
    age : {
        type : Number
    },
    emailId: {
      type : String 
    },

    password : {
        type : String

    },
    gender : {
        type : String
    }

}
)

//writing model

const User = mongoose.model('User',userSchema)

module.exports = User; 