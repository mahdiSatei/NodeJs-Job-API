const register = async (req, res) => {
    res.json('Register')
}

const login = async (req, res) => {
    res.json('Login')
}

module.exports = {
    register,
    login
}