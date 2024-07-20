const { CustomErrorAPI } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof CustomErrorAPI) {
       return res.status(error.statusCode).json({msg : error.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
}

module.exports = errorHandlerMiddleware