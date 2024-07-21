const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Job = require('../models/Jobs')

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy : req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count : jobs.length})
}

const getSingleJob = async (req, res) => {
    const {user : {userId}, params : {id : jobId}} = req

    const job = await Job.findOne ({
        createdBy : userId,
        _id : jobId
    })

    if(!job) {
        throw new NotFoundError(`Can't find job with id ${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})
}

const updateJob = async (req, res) => {
    res.send("update jobs")
}

const deleteJob = async (req, res) => {
    res.send("delete jobs")
}

module.exports = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob
}