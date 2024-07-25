require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const rateLimeter = require('express-rate-limit')


// middleware 
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authMiddelware = require('./middleware/authentication')

// routes
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/job')

// connect datebase
const connectDB = require('./db/connect')

app.use(
    rateLimeter({
    windowMs : 15 * 60 * 100,
    limit : 100
    })
)

app.use(express.json())
app.use(cors())
app.use(xss())
app.use(helmet())

// router
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authMiddelware, jobRouter)

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