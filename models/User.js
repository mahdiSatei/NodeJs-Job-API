const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "please provid name"],
        maxlength : 20
    }, 
    email : {
        type : String,
        unique : true,
        required : [true, "please provid email"],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please provide a valid email"
        ]
    },
    password : {
        type : String,
        required : [true, "please provid a password"],
        minlength : 8
    }
}, {timestamps : true})

module.exports = mongoose.model("User", UserSchema)