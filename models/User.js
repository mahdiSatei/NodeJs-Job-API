require('dotenv').config()
const mongoose = require('mongoose')
const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : [true, 'Please provid a name'],
        minlenght : 3,
        maxlenght : 50
    },
    email : {
        type : String,
        required : [true, 'Please provid an email'],    
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'Please provid a psassword'],
        minlenght : 8
    }
})

UserSchema.pre('save', async function(next){
    const salt = await bcyrpt.genSalt(10)
    this.password = await bcyrpt.hash(this.password, salt)
    next()
})

UserSchema.methods.genJWT = function() {
    return jwt.sign(
        {name : this.name, userId : this._id},
        process.env.JWT_SECRET,
        {expiresIn : process.env.JWT_LIFETIME}
    )
}

module.exports = mongoose.model('User', UserSchema)