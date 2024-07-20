require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// middleware 
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// routes
const authRouter = require('./routes/auth')

// connect datebase
const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> console.log(`Server is listening to port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()