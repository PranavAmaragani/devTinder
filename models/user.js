const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


    firstName : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 50
    },
   lastName : {
       type : String,
    
    },
    age : {
        type : Number,
        min : 18
    },
    emailId: {
      required : true,
      unique : true,
      type : String,
      lowercase : true,
      trim : true
    },

    password : {
        type : String,
        required : true,
        validate(value){
            const hasUppercase = /[A-Z]/.test(value);
            const hasSpecialChar = /[!@#$%^&*()_]/.test(value);
            const hasNumericValue = /[0-9]/.test(value);

            if(!(hasUppercase && hasSpecialChar && hasNumericValue)){
                throw new Error("password atleast have one upperase, special character and numeric value")
            }

        }

    },
    gender : {
        type : String,
        lowercase : true,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender data is not valid");
                
            }
        }
        
    },
    skils: {
        type : [String]
    },
    about : {
        type : String,
        default : "Hello everyone, welcome to my profile!!"
    },
    photoURL : {
        type : String,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"

    }


},
    {timestamps : true}
)

//writing model

const User = mongoose.model('User',userSchema)

module.exports = User; 