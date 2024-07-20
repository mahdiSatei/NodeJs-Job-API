const mongoose = require('mongoose')
const bcyrpt = require('bcryptjs')

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
// module.exports = mongoose.model('User', UserSchema)
module.exports = mongoose.model('User', UserSchema)