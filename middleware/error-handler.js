const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (error, req, res, next) => {

    let customError = {
        statusCode : error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg : error.message || "Something went wrong, please try again later"
    }

    if (error.code && error.code === 11000) {
        customError.statusCode = StatusCodes.BAD_REQUEST
        customError.msg = "User already exist"
    }
    
    if (error.name === "ValidationError") {
        customError.msg = Object.values(error.errors)
            .map((item) => item.message)
            .join(', ')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (error.name === "CastError") {
        customError.msg = `No item found with id ${error.value}`
        customError.statusCode = StatusCodes.NOT_FOUND
    }

    return res.status(customError.statusCode).json({msg : customError.msg})
}

module.exports = errorHandlerMiddleware