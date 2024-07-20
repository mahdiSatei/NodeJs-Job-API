const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./custom-error.js')

class UnauthenticatedError extends CustomErrorAPI{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError