const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    company : {
        type : String,
        required : [true, "Please provide company name"],
        maxlength : 30
    },
    position : {
        type : String,
        required : [true, "Please provide position"],
        maxlength : 100
    },
    status : {
        type : String,
        enum : ['interview', 'declined', 'pending'],
        default : 'pending'
    },
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        default : [true, "Please provide user"]
    }
}, {timestamps : true})

module.exports = mongoose.Schema('Jobs', JobsSchema)