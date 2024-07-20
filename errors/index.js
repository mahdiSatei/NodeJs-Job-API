const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')
const CustomErrorAPI = require('./custom-error')
const NotFoundError = require('./not-found')


module.exports = {
    BadRequestError,
    UnauthenticatedError,
    CustomErrorAPI,
    NotFoundError
}