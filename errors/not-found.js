const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./custom-error.js')

class NotFoundError extends CustomErrorAPI{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError