require('dotenv').config()
const express = require('express')
const app = express()

// middleware 
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// routes
const authRouter = require('./routes/auth')

app.use('/auth', authRouter)
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = () => {
    try {
        app.listen(PORT, ()=> console.log(`Server is listening to port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()