require('dotenv').config()
const express = require('express')
const app = express()

// middleware 
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const PORT = process.env.PORT || 3000

const start = () => {
    try {
        app.listen(PORT, ()=> console.log(`Server is listening to port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()