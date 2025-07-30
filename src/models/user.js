const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : "true",
        uppercase: "true",
        trim : "true"
    },
    lastName : {
        type : String ,
        uppercase: "true",
        trim : "true"
    },
    emailId : {
        type : String,
        required : "true",
        unique : "true",
        lowercase : "true",
        trim : "true"
    },
    password : {
        type : String,
        required: "true",
        trim : "true",
        minLength: 8
    },
    age : {
        type : Number,
        min: 18,
        max: 45
    },
    gender : {
        type : String,
        validate(value) {
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender Data is Not Valid");
            }
        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;