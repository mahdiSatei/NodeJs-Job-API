const User = require('../models/User')
const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const user = await User.create(req.body)
    const token = user.genJWT()
    res.json({user, token})
}

const login = async (req, res) => {
    res.json('Login')
}

module.exports = {
    register,
    login
}