const User = require('../models/User')
const {BadRequestError, UnauthenticatedError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {
    const user = await User.create(req.body)
    const token = user.genJWT()
    res.status(StatusCodes.CREATED).json({user : { name : user.name }, token})
}

const login = async (req, res) => {
    const {email , password} = req.body
    
    if (!email || !password) {
        throw new BadRequestError('Please provid email and password')
    }

    const user = await User.findOne({email : email})
    
    if (!user) {
        throw new UnauthenticatedError('User is not exist')
    }

    const checkPassword = await user.comparePassword(password)

    if (!checkPassword) {
        throw new UnauthenticatedError('Wrong password')
    }

    const token = user.genJWT()

    res.status(StatusCodes.OK).json({user : { name : user.name }, token})
}

module.exports = {
    register,
    login
}